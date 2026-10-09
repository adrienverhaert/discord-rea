import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { parse } from 'acorn';
import * as walk from 'acorn-walk';
import prettier from 'prettier';
import postcss from 'postcss';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const assets = path.join(root, 'recovered/web/assets');
const sha = text => crypto.createHash('sha256').update(text).digest('hex');
const relative = file => path.relative(root, file).replaceAll('\\', '/');
const propKey = node => node?.computed ? undefined : node?.key?.name ?? node?.key?.value;
const valueKey = node => node?.type === 'Literal' ? String(node.value) : undefined;
const fnTypes = new Set(['FunctionExpression', 'ArrowFunctionExpression']);
const write = async (file, content) => { await fs.mkdir(path.dirname(file), { recursive: true }); await fs.writeFile(file, content); };
const entries = [], errors = [], contexts = new Map(), sourceFiles = [];
const componentTerms = {
  guildSidebar: /GuildsNav|GuildsBar|GuildSidebar|guildsNav|guildsList/g,
  channels: /PrivateChannels|ChannelList|ChannelItem|channelName/g,
  composer: /ChannelTextArea|MessageComposer|SlateTextArea|channelTextArea/g,
  friends: /FriendsList|PeopleList|FriendsSection|peopleList/g,
  settings: /UserSettings|SettingsSidebar|userSettings/g,
};
const candidates = Object.fromEntries(Object.keys(componentTerms).map(k => [k, []]));
let completed = 0;
for (const asset of (await fs.readdir(assets)).filter(n => n.endsWith('.js')).sort()) {
  const file = path.join(assets, asset), source = await fs.readFile(file, 'utf8');
  const record = { file: relative(file), bytes: Buffer.byteLength(source), sha256: sha(source), sourceMappingURL: source.match(/[#@]\s*sourceMappingURL=([^\s]+)/)?.[1] ?? null };
  sourceFiles.push(record);
  let ast;
  try { ast = parse(source, { ecmaVersion: 'latest', sourceType: 'script', allowReturnOutsideFunction: true }); }
  catch (error) { errors.push({ file: record.file, error: error.message }); continue; }
  const tables = [];
  walk.simple(ast, { ObjectExpression(node) {
    if (node.properties.length && node.properties.every(p => p.type === 'Property' && /^\d+$/.test(String(propKey(p))) && fnTypes.has(p.value.type))) tables.push(node);
  }});
  tables.sort((a,b) => a.start - b.start || b.end-a.end);
  const selected = tables.filter((t,i) => !tables.slice(0,i).some(x => x.start <= t.start && x.end >= t.end));
  for (const table of selected) for (const property of table.properties) {
    const id = String(propKey(property)), factory = property.value, raw = source.slice(property.start, property.end), rawFactory = source.slice(factory.start, factory.end);
    const requireName = factory.params[2]?.name, moduleName = factory.params[0]?.name;
    const deps = new Set(), asyncDeps = new Set(), bindings = new Map(), exported = new Map();
    const body = factory.body.type === 'BlockStatement' ? factory.body.body : [];
    for (const statement of body) {
      if (statement.type === 'FunctionDeclaration' && statement.id) bindings.set(statement.id.name, statement);
      if (statement.type === 'VariableDeclaration') for (const decl of statement.declarations) if (decl.id.type === 'Identifier' && decl.init) bindings.set(decl.id.name, decl.init);
    }
    walk.simple(factory.body, {
      CallExpression(node) {
        if (requireName && node.callee.type === 'Identifier' && node.callee.name === requireName && valueKey(node.arguments[0])) deps.add(valueKey(node.arguments[0]));
        if (requireName && node.callee.type === 'MemberExpression' && node.callee.object.name === requireName && node.callee.property.name === 'e' && valueKey(node.arguments[0])) asyncDeps.add(valueKey(node.arguments[0]));
        if (requireName && node.callee.type === 'MemberExpression' && node.callee.object.name === requireName && node.callee.property.name === 'd' && node.arguments[1]?.type === 'ObjectExpression') {
          for (const p of node.arguments[1].properties) if (p.type === 'Property' && p.value.type === 'ArrowFunctionExpression') exported.set(String(propKey(p)), p.value.body);
        }
      },
      AssignmentExpression(node) {
        if (node.left.type === 'MemberExpression' && node.left.object.name === factory.params[1]?.name && !node.left.computed) exported.set(node.left.property.name, node.right);
      }
    });
    const out = path.join(root, 'recovered/modules', asset.slice(0,-3), `${id}.js`);
    let expression = rawFactory;
    if (property.method) expression = `${factory.async ? 'async ' : ''}function${factory.generator ? '*' : ''} ${rawFactory}`;
    let readable;
    try { readable = await prettier.format(`export default ${expression};\n`, { parser:'babel', printWidth:100 }); }
    catch (error) { errors.push({file:record.file,moduleId:id,error:error.message}); readable = `export default ${expression};\n`; }
    const header = `/* Recovered shipped factory. Module ${id}.\n * Source: ${record.file}\n * UTF-16 property offsets: ${property.start}..${property.end}\n * Raw property SHA-256: ${sha(raw)}\n * Wrapper export added for inspection; webpack imports are unresolved.\n */\n`;
    await write(out, header + readable);
    const entry = { moduleId:id, source:record.file, sourceSha256:record.sha256, propertyStart:property.start, propertyEnd:property.end, factoryStart:factory.start, factoryEnd:factory.end, rawPropertySha256:sha(raw), output:relative(out), dependencies:[...deps], asyncChunks:[...asyncDeps], exports:[...exported.keys()] };
    entries.push(entry);
    for (const [kind,regex] of Object.entries(componentTerms)) {
      regex.lastIndex = 0; const match = regex.exec(raw);
      if (match && candidates[kind].length < 20) candidates[kind].push({moduleId:id,source:record.file,output:entry.output,term:match[0],offset:property.start+match.index,snippet:raw.slice(Math.max(0,match.index-65),match.index+135)});
    }
    const bindingRefs = new Map();
    for (const [name,node] of bindings) {
      if (node.type==='CallExpression' && node.callee.name===requireName && valueKey(node.arguments[0])) bindingRefs.set(name,{moduleId:valueKey(node.arguments[0])});
      else if (node.type==='Identifier') bindingRefs.set(name,{local:node.name});
      else if (['FunctionDeclaration','FunctionExpression','ArrowFunctionExpression'].includes(node.type)) {
        const primitives = [], viewBoxes = [];
        walk.simple(node, { CallExpression(call) {
          if (call.arguments[0]?.type !== 'Literal' || !['path','circle','rect','line','polyline','polygon','svg'].includes(call.arguments[0].value) || call.arguments[1]?.type !== 'ObjectExpression') return;
          const tag = call.arguments[0].value, attrs = {};
          for (const p of call.arguments[1].properties) if (p.type==='Property' && p.value.type==='Literal') attrs[propKey(p)]=p.value.value;
          if(tag==='svg') { if(attrs.viewBox)viewBoxes.push(attrs.viewBox); }
          else if(tag==='path' && attrs.d) primitives.push({tag, ...Object.fromEntries(Object.entries(attrs).filter(([key])=>['d','fillRule','clipRule','opacity','strokeWidth','strokeLinecap','strokeLinejoin'].includes(key)))});
        }});
        if(primitives.length && primitives.length < 20) bindingRefs.set(name,{component:{viewBox:viewBoxes[0]||'0 0 24 24',primitives,paths:primitives.map(p=>p.d),symbol:name,offset:node.start}});
      }
    }
    const exportRefs = new Map();
    for(const [name,node] of exported) {
      if(node.type==='Identifier') exportRefs.set(name,{local:node.name});
      else if(node.type==='MemberExpression' && node.object.type==='Identifier') exportRefs.set(name,{binding:node.object.name,exportName:node.computed?String(node.property.value):node.property.name});
    }
    contexts.set(id,{entry,bindings:bindingRefs,exports:exportRefs});
  }
  completed++;
  if(completed%40===0) console.log(`Parsed ${completed} assets; recovered ${entries.length} module factories`);
}
function resolve(id,ref,seen=new Set()) {
  const marker=id+JSON.stringify(ref); if(seen.has(marker))return null;seen.add(marker);
  const context=contexts.get(id); if(!context)return null;
  if(ref.component)return {...ref.component,source:context.entry.source,moduleId:id,output:context.entry.output};
  if(ref.local){let next=context.bindings.get(ref.local);return next?resolve(id,next,seen):null;}
  if(ref.binding){let next=context.bindings.get(ref.binding);if(next?.moduleId){let target=contexts.get(next.moduleId)?.exports.get(ref.exportName);return target?resolve(next.moduleId,target,seen):null;}}
  return null;
}
const desired = {home:'HomeIcon',friends:'FriendsIcon',chat:'ChatIcon',plus:'PlusSmallIcon',search:'MagnifyingGlassIcon',settings:'SettingsIcon',mic:'MicrophoneIcon',headphones:'HeadphonesIcon',hash:'HashmarkIcon',bell:'BellIcon',inbox:'InboxIcon',help:'CircleQuestionIcon',chevronDown:'ChevronSmallDownIcon',close:'XSmallIcon',send:'SendMessageIcon',gift:'GiftIcon',emoji:'EmojiSlightlySmilingFaceIcon',pin:'PinIcon',member:'GroupIcon',screen:'ScreenIcon',mute:'MicrophoneSlashIcon',deafen:'HeadphonesSlashIcon',compass:'CompassIcon',download:'DownloadIcon',discord:'ClydeIcon',attachment:'AttachmentIcon'};
const allIconNames=new Set(), icons={}, iconCandidates={};
for(const [id,context] of contexts) for(const [name,ref] of context.exports) {
  if(name.endsWith('Icon')) {allIconNames.add(name);const result=resolve(id,ref);if(result)iconCandidates[name]=result;}
}
for(const [key,name] of Object.entries(desired)) if(iconCandidates[name])icons[key]={...iconCandidates[name],exportName:name};
await write(path.join(root,'src/extracted/icons.js'),`// SVG geometry recovered statically from the shipped Discord web modules.\n// See evidence/ui-source-map.json for provenance; no captured bundle was executed.\nexport const icons = ${JSON.stringify(icons,null,2)};\nexport const iconPaths = Object.fromEntries(Object.entries(icons).map(([key, value]) => [key, value.paths]));\nexport const iconSource = Object.fromEntries(Object.entries(icons).map(([key, value]) => [key, { moduleId: value.moduleId, source: value.source, offset: value.offset }]));\n`);
const cssSources=[], rules=[], cssClasses=[];
for(const asset of (await fs.readdir(assets)).filter(n=>n.endsWith('.css')).sort()) {
  const file=path.join(assets,asset),source=await fs.readFile(file,'utf8');
  const sheet=postcss.parse(source,{from:file});
  let selectedCount=0;
  sheet.walkRules(rule=>{
    const declarations=rule.nodes.filter(node=>node.type==='decl' && node.prop.startsWith('--'));
    const ancestors=[];let parent=rule.parent;
    while(parent && parent.type!=='root'){ancestors.push(parent);parent=parent.parent;}
    const themed=/:(?:root)|theme-dark|theme-light|theme-midnight|theme-darker/.test([rule.selector,...ancestors.filter(n=>n.type==='rule').map(n=>n.selector)].join(' '));
    if(declarations.length && themed){
      let block=rule.clone({nodes:declarations.map(d=>d.clone())});
      for(const ancestor of ancestors){const wrapper=ancestor.clone({nodes:[]});wrapper.append(block);block=wrapper;}
      rules.push(block.toString());selectedCount++;
    }
    if(/guilds|sidebar|chatContent|channelTextArea|peopleList|membersWrap|contentRegion/.test(rule.selector) && cssClasses.length<100){
      cssClasses.push({source:relative(file),selector:rule.selector,ancestors:ancestors.map(n=>n.type==='atrule'?`@${n.name} ${n.params}`:n.selector).reverse(),offset:rule.source?.start?.offset??null,declarations:rule.nodes.filter(n=>n.type==='decl').map(n=>n.toString()).join(';')});
    }
  });
  if(selectedCount)cssSources.push({source:relative(file),sha256:sha(source),selectedRuleCount:selectedCount});
}
const fontFiles=['ggsans-400-normal.woff2','ggsans-500-medium.woff2'];
for(const font of fontFiles){await fs.mkdir(path.join(root,'public/extracted/fonts'),{recursive:true});await fs.copyFile(path.join(root,'recovered/desktop/bootstrap/splash/fonts',font),path.join(root,'public/extracted/fonts',font));}
await write(path.join(root,'src/extracted/theme-tokens.css'),`/* Custom-property declarations copied from captured Discord CSS. Source hashes are in evidence. */\n${rules.join('\n')}\n@font-face{font-family:'gg sans';font-style:normal;font-weight:400;font-display:swap;src:url('/extracted/fonts/ggsans-400-normal.woff2') format('woff2')}\n@font-face{font-family:'gg sans';font-style:normal;font-weight:500;font-display:swap;src:url('/extracted/fonts/ggsans-500-medium.woff2') format('woff2')}\n`);
const index={formatVersion:1,method:'Acorn static parse + Prettier formatting, never eval',offsetUnit:'UTF-16 JavaScript string offsets, end-exclusive',createdAt:new Date().toISOString(),assetCount:sourceFiles.length,moduleCount:entries.length,sources:sourceFiles,errors,modules:entries};
await write(path.join(root,'evidence/module-index.json'),JSON.stringify(index,null,2)+'\n');
await write(path.join(root,'evidence/ui-source-map.json'),JSON.stringify({method:'Static exported-symbol resolution and literal SVG geometry extraction; component candidates are search references, not proof of complete independent modules.',desktopToWeb:'core.asar builds WEBAPP_ENDPOINT + /app and loads it via mainWindow.loadURL. Captured web deployment is live and may differ from the desktop bootstrap version.',icons,availableIconNames:[...allIconNames].sort(),resolvableIconNames:Object.keys(iconCandidates).sort(),theme:{sources:cssSources,customPropertyRuleCount:rules.length,fontFiles:fontFiles.map(f=>({original:`recovered/desktop/bootstrap/splash/fonts/${f}`,copied:`public/extracted/fonts/${f}`}))},componentCandidates:candidates,layoutClassReferences:cssClasses},null,2)+'\n');
await write(path.join(root,'recovered/SOURCE-RECOVERY.md'),`# Recovery boundaries\n\nThe installed Discord Electron core loads the web frontend remotely from its observed WEBAPP_ENDPOINT and /app. The captured JavaScript and CSS represent the live deployment requested during extraction, not a guaranteed historical match for the installed bootstrap version.\n\n## Shipped code\n\n- Raw byte-preserving JavaScript/CSS: web/assets/.\n- Pretty-printed module factories: modules/. Each file records its source asset, module ID, original UTF-16 property offsets and SHA-256. An export wrapper was added for inspection; webpack references retain their shipped numeric IDs.\n- evidence/module-index.json records the dependency edges statically visible as direct webpack require calls and async chunk references. Dynamic dependencies are not inferred.\n- src/extracted/icons.js contains recovered SVG path geometry reached by statically resolving exported icon symbols. It is not hand-drawn.\n- src/extracted/theme-tokens.css copies upstream custom-property declarations. The two gg sans files came from the desktop splash ASAR.\n\n## Limits\n\nFactory formatting cannot restore erased comments, original TypeScript types, original variable names, source file layout or missing chunks. Exported factories are inspection artifacts and are not runnable independently. The local app supplies its own state and UI orchestration; it does not execute the captured Discord service application. Component search candidates in evidence/ui-source-map.json are navigation aids and do not certify independent recovery of each complete component. Native modules and Discord service implementations are outside this frontend recovery. No personal profile, token, message cache or account data was read.\n`);
console.log(JSON.stringify({assets:sourceFiles.length,modules:entries.length,errors:errors.length,iconKeys:Object.keys(icons),resolvableIcons:Object.keys(iconCandidates).length,themeRules:rules.length},null,2));

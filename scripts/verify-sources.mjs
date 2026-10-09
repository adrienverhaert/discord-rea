import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {parse} from 'acorn';
const hash=b=>createHash('sha256').update(b).digest('hex');
const read=p=>JSON.parse(fs.readFileSync(p,'utf8'));
const desktop=read('evidence/desktop-manifest.json');const web=read('evidence/web-manifest.json');const index=read('evidence/module-index.json');const errors=[];let originals=0,modules=0;const texts=new Map();
for(const file of [...desktop.archives.flatMap(a=>a.files),...web.files,...(web.html?[web.html]:[])]){const b=fs.readFileSync(file.path);if(b.length!==file.bytes||hash(b)!==file.sha256)errors.push('Source digest mismatch: '+file.path);originals++;}
for(const m of index.modules){let text=texts.get(m.source);if(!text){text=fs.readFileSync(m.source,'utf8');texts.set(m.source,text)}if(hash(Buffer.from(text.slice(m.propertyStart,m.propertyEnd)))!==m.rawPropertySha256)errors.push('Module source range mismatch: '+m.output);try{parse(fs.readFileSync(m.output,'utf8'),{ecmaVersion:'latest',sourceType:'module'});}catch(e){errors.push('Module syntax: '+m.output+' '+e.message)}modules++;}
const report={checkedAt:new Date().toISOString(),originalFilesVerified:originals,moduleRangesVerified:modules,moduleOutputsParsed:modules,errors,passed:errors.length===0};fs.writeFileSync('evidence/recovery-verification.json',JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify(report,null,2));if(errors.length)process.exitCode=1;

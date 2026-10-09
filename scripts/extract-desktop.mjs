import {readFileSync,writeFileSync,mkdirSync,existsSync} from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';
const base=process.argv[2];
const out=path.resolve('recovered/desktop');
const hash=b=>createHash('sha256').update(b).digest('hex');
const sources=[['bootstrap','resources/app.asar'],['core','modules/discord_desktop_core-1/discord_desktop_core/core.asar']];
const manifest={capturedAt:new Date().toISOString(),version:'1.0.9261',executable:{filename:'Discord.exe',sha256:hash(readFileSync(path.join(base,'Discord.exe')))},archives:[]};
for(const [name,relative] of sources){
 const b=readFileSync(path.join(base,relative));const header=JSON.parse(b.subarray(16,16+b.readUInt32LE(12)).toString());const start=8+b.readUInt32LE(4);const files=[];
 function walk(tree,prefix=''){for(const [key,v] of Object.entries(tree.files||{})){const rel=prefix+key;if(v.files){walk(v,rel+'/');continue;}if(v.link||v.unpacked)throw Error('Unsupported ASAR entry '+rel);const dest=path.resolve(out,name,rel);if(!dest.startsWith(path.resolve(out,name)+path.sep))throw Error('Path escape');const contents=b.subarray(start+Number(v.offset),start+Number(v.offset)+v.size);if(contents.length!==v.size)throw Error('Truncated ASAR');mkdirSync(path.dirname(dest),{recursive:true});writeFileSync(dest,contents);files.push({path:`recovered/desktop/${name}/${rel}`,bytes:v.size,sha256:hash(contents)});}}
 walk(header);manifest.archives.push({source:relative,bytes:b.length,sha256:hash(b),files});
}
writeFileSync('evidence/desktop-manifest.json',JSON.stringify(manifest,null,2)+'\n');
console.log(JSON.stringify({archives:manifest.archives.map(a=>({source:a.source,files:a.files.length})),exe:manifest.executable}));

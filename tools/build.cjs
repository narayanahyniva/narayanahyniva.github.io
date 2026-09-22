// GitHub Pages still serves source directly. This optional build validates and stages it.
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const {execFileSync} = require('node:child_process');
const html=fs.readFileSync('index.html','utf8');
const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
assert.equal(ids.length,new Set(ids).size,'Duplicate HTML IDs');
for(const [,href] of html.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.includes(href),`Missing anchor ${href}`);
for(const [,href] of html.matchAll(/(?:src|href)="([^"#:]+(?:\?[^" ]*)?)"/g)) {
  if(/^(https?:|mailto:|tel:)/.test(href)) continue;
  assert.ok(fs.existsSync(href.split('?')[0]),`Missing file ${href}`);
}
for(const [,schema] of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) JSON.parse(schema);
assert.equal((html.match(/<h1\b/g)||[]).length,1,'Exactly one h1 required');
execFileSync(process.execPath,['--check','script.js'],{stdio:'inherit'});
console.log('Validation passed: syntax, anchors, IDs, local assets, structured data, h1.');
if(!process.argv.includes('--check')) {
  fs.mkdirSync('dist',{recursive:true});
  for(const file of ['index.html','styles.css','portfolio.css','script.js','robots.txt','sitemap.xml','.nojekyll']) fs.copyFileSync(file,path.join('dist',file));
  fs.cpSync('assets','dist/assets',{recursive:true});
  console.log('Production static site staged in dist/. No transpilation or runtime dependencies required.');
}

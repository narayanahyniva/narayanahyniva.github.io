const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const fs = require('node:fs');
(async()=>{
 const browser=await chromium.launch({channel:'msedge',headless:true});
 const page=await browser.newPage({viewport:{width:1440,height:1000}});
 await page.goto(process.env.SITE_URL || 'http://127.0.0.1:8080',{waitUntil:'networkidle'});
 fs.mkdirSync('artifacts',{recursive:true});
 await page.addScriptTag({path:process.env.AXE_PATH || require.resolve('axe-core/axe.min.js')});
 const audit=await page.evaluate(()=>axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21aa']}}));
 fs.writeFileSync('artifacts/accessibility.json',JSON.stringify(audit,null,2));
 if(audit.violations.length) process.exitCode=1;
 console.log(JSON.stringify(audit.violations.map(v=>({id:v.id,impact:v.impact,count:v.nodes.length,examples:v.nodes.slice(0,6).map(n=>({target:n.target,summary:n.failureSummary}))})),null,2));
 const urls=await page.locator('a[href^="http"]').evaluateAll(nodes=>[...new Set(nodes.map(x=>x.href.split('?')[0]))]);
 const links=await Promise.all(urls.map(async url=>{
   try { const r=await page.request.get(url,{timeout:15000});return {url,status:r.status()}; }
   catch(e){return {url,error:e.message.split('\n')[0]};}
 }));
 fs.writeFileSync('artifacts/links.json',JSON.stringify(links,null,2));
 console.log(JSON.stringify({links},null,2));
 await page.locator('#about').screenshot({path:'artifacts/about.png'});
 await page.locator('#certifications').screenshot({path:'artifacts/certifications.png'});
 await browser.close();
})();

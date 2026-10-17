// Test exported/patched Apps Script in isolation: no network, Sheets, or Mail services.
import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const source=fs.readFileSync(process.argv[2],'utf8');
for (const scenario of ['ok','mail-fails','sheet-fails']) {
 let writes=0,sends=0;
 const c=vm.createContext({console:{error(){}},SpreadsheetApp:{openById:()=>({getSheetByName:()=>({appendRow(){if(scenario==='sheet-fails')throw Error('save failed');writes++;}})})},MailApp:{sendEmail(){sends++;if(scenario==='mail-fails')throw Error('quota');}},ContentService:{MimeType:{JSON:'json'},createTextOutput:text=>({setMimeType:()=>JSON.parse(text)})}});
 vm.runInContext(source,c);
 const result=c.doPost({postData:{contents:JSON.stringify({name:'Test'})}});
 assert.equal(result.ok,scenario!=='sheet-fails');
 assert.equal(writes,scenario==='sheet-fails'?0:1);
 assert.equal(sends,scenario==='sheet-fails'?0:1);
 if(scenario==='mail-fails')assert.equal(result.notificationSent,false);
}
console.log('PASS: storage failures remain failures; mail failures do not invalidate saved submissions');

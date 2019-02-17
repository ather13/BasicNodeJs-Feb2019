const fsobj = require('fs')

console.log("reading from user file...")

const data = fsobj.readFileSync('user.json','utf8');

console.log(data);

console.log('reading of file completed sync');

console.log("\n....................\n")

console.log("async reading from user file...")
const adata = fsobj.readFile('user.json','utf8',(err,data) => {
    if (err) console.log(err);
    if (data) console.log(data);
})
console.log('reading of file completed sync');
const fsys=require('fs');
const details=fsys.readFileSync('data.txt');
console.log(details.toString());
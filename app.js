// console.log("lucky is back")
// console.log(__dirname)
// console.log(__filename)

const os = require('os')
const path = require('path')
// const filename = path.join(__dirname, '/content', 'subfolder', 'test.txt');
const filename = path.resolve(__dirname, '/content', 'subfolder', 'test.txt');
console.log(filename);

//new changes
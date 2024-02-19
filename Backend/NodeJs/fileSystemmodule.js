// Importing file system module
const fs = require("fs");

//NOTE:-> readFile, writeFile are the non-blocking i/o model of nodejs to prevent this i.e., we can use readFileSync, writeFileSync

// TO READ FROM ANOTHER FILE

// fs.readFile('file.txt', 'utf8', (err, data) => {
//     console.log(err, data);
// });

// console.log("This will come before readFile");

// When we want node.js file to be blocked intentially we use "readFileSync"
// const a = fs.readFileSync('file.txt');
// console.log(a);

// const a = fs.readFileSync('file.txt');
// console.log(a.toString()); // To see the content of the file we use toString()

// console.log("This will come after readFileSync");

// TO CREATE A NEW FILE AND WRITE SOMETHING IN IT OR WRITE SOMETHING IN AN EXISTING FILE

// fs.writeFile('file2.txt', "This is a data", () => {
//     console.log("Written to the file");
// });

// console.log("this will come before writeFile");

b = fs.writeFileSync("file2.txt", "This is a data 2");
console.log(b);

console.log("This will come after writeFileSync");

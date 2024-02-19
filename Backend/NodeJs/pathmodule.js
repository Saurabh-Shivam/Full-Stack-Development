// IMPORTING PATH MODULE
const path = require('path');

// USING THE METHODS OF PATH 
const a1 = path.basename('C:\\temp\\myfile.html'); // gives the basename of the path
console.log(a1);

const a2 = path.dirname('C:\\temp\\myfile.html'); // gives the dirname of the path
console.log(a2);

const a3 = path.extname(__filename);
console.log(a3);
console.log(__filename, a3);

// OUTPUT OF THE ABOVE CODE
// myfile.html
// C:\temp
// .js
// d:\Programming\nodejs\pathmodule.js .js
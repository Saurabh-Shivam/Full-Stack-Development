console.log("Hello World");

// PS D:\Programming\nodejs> node "d:\Programming\nodejs\index.js"    
// PS D:\Programming\nodejs> node index.js
// PS D:\Programming\nodejs> node index
// Hello World

// FOR CHECKING VERSION
// PS D:\Programming\nodejs> node --version
// v14.17.4
// PS D:\Programming\nodejs> npm --version
// 6.14.14

// FOR ADDING JSON PACKAGE
// PS D:\Programming\nodejs> npm init
// This utility will walk you through creating a package.json file.
// It only covers the most common items, and tries to guess sensible defaults.

// See `npm help init` for definitive documentation on these fields   
// and exactly what they do.

// Use `npm install <pkg>` afterwards to install a package and        
// save it as a dependency in the package.json file.

// Press ^C at any time to quit.
// package name: (nodejs) Saurabh
// Sorry, name can no longer contain capital letters.
// package name: (nodejs) saurabh
// version: (1.0.0)
// description: This is an amazing project
// entry point: (index.js)
// test command:
// git repository:
// keywords:
// author: Saurabh
// license: (ISC)
// About to write to D:\Programming\nodejs\package.json:

// {
//   "name": "saurabh",
//   "version": "1.0.0",
//   "description": "This is an amazing project",
//   "main": "index.js",
//   "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1"
//   },
//   "author": "Saurabh",
//   "license": "ISC"
// }

// Is this OK? (yes) yes

// FOR ADDING DEPENDENCIES
// npm install express --save
// npm i express
// npm i @angular/cli


// FOR ADDING DEV-DEPENDENCIES 
// npm install --save-dev nodemon

// FOR UNINSTALING DEV-DEPENDENCIES AND DEPENDENCIES
// npm uninstall nodemon
// npm uninstall express

// package.json -> It contains the dependencies which we created
// package-lock.json -> It contains the dependencies for the dependencies we created, i.e., it contains the whole dependency tree

// IMPORTING CONTENT OF ONE FILE IN ANOTHER FILE
// This type of import system are known as common js modules
const boy = require("./second");
console.log(boy);
// IMPORTING OS MODULE
const os = require('os'); //built-in module

//USING THE METHODS OF OS
console.log(os.freemem()); // tells us about the free memory  left in our computer
console.log(os.homedir()); // gives us our home directory of the computer
console.log(os.hostname()); // gives the hostname of our computer
console.log(os.platform());
console.log(os.release());
console.log(os.type());

//OUTPUTS OF THE ABOVE CODE
// 2059493376
// C:\Users\DELL
// Stormbreaker
// win32
// 10.0.19043
// Windows_NT
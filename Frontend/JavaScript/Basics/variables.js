// To print anything on the console
console.log("My Name is Saurabh Shivam");

// Three ways to create variable
// #1 using var
console.log("var");
var a = 10;
console.log(a);

a = 20;
console.log(a);

{
  var a = 30;
}
console.log(a);

// #2 - using let
console.log("Let");
let b = 10;
console.log(b);

// let b = 20; - Error
b = 20;
console.log(b);

{
  let ba = 40;
  console.log(ba);
}
// console.log(ba); - Error

// #3 - using const
console.log("const");

const c = 10;
console.log(c);

// c = 20; //Error
console.log(c);

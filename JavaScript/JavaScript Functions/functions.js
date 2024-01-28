// Ways to write/create function

// #1 - Function to add two numbers
console.log("Function to add two numbers");
function addTwoNumbers(a, b) {
  let sum = a + b;
  return sum;
}

let num1 = Math.round(Math.random() * 1000);
let num2 = Math.round(Math.random() * 1000);
console.log(addTwoNumbers(num1, num2));

// #2 - Function Assignment
console.log("Function Assignment");
let add = function mulTwoNumbers(a, b) {
  let mul = a * b;
  return mul;
};

let a = Math.round(Math.random() * 1000);
let b = Math.round(Math.random() * 1000);
console.log(add(a, b));

// #3 - Anynomous Function
console.log("Anynomous Function");
let addition = function (a, b) {
  let sum = a + b;
  return sum;
};

let n1 = Math.round(Math.random() * 1000);
let n2 = Math.round(Math.random() * 1000);
console.log(add(n1, n2));

// #4 - Arrow Function
console.log("Arrow Function");
let subtration = (a, b) => {
  let sub = a - b;
  return sub;
};

let number1 = Math.round(Math.random() * 1000);
let number2 = Math.round(Math.random() * 1000);
console.log(add(number1, number2));

// Conditional Statements

// #1 If Else
// (a) - Single If Else
let number = 10;
if (number > 10) {
  console.log("Number is greater than 10");
} else {
  console.log("Number is lesser or equal to 10");
}

// (b) - Multiple if else
if (number < 10) {
  console.log("Number is lesser than 10");
} else if (number > 10) {
  console.log("Number is greater than 10");
} else {
  console.log("Number is equal to 10");
}

// #2 Ternary Operator Case
let num = 5;
num > 20
  ? console.log("Number is greater than 20")
  : console.log("Number is less than 20");

// #3 Switch Case
let weekNumber = 4;
switch (weekNumber) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  case 3:
    console.log("Wednesday");
    break;

  case 4:
    console.log("Thursday");
    break;

  case 5:
    console.log("Friday");
    break;

  case 6:
    console.log("Saturday");
    break;

  case 7:
    console.log("Sunday");
    break;

  default:
    console.log("Invalid");
}

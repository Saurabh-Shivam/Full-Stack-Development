// Loops

// #1 For Loop
console.log("For Loop");
let num = 100;
for (let i = 1; i <= num; i++) {
  console.log(`${i} * ${i} = ${i * i}`);
  if (i % 10 == 0) console.log("\n");
}

// #2 While Loop
console.log("While Loop");
let i = 10;
while (i > 0) {
  console.log(`${5 * i}`);
  i--;
}

// #3 Do While Loop
console.log("Do While Loop");
let a = 1;
do {
  console.log(`${5 * a}`);
  a--;
} while (a > 10);

// #4 For-In Loop
console.log("For In Loop");
console.log("object Employee has been created");
const Employee = {
  name: "NameofEmployee",
  age: 15,

  address: {
    street: 69,
    colony: "L_LASAN",
    district: "No Way Home",
  },
};

for (let key in Employee) {
  console.log(key, Employee[key]);
}

for (let key in Employee.address) {
  console.log(key, Employee.address[key]);
}

// #5 For-Of Loop
console.log("For Of Loop")
let arr = ["MyName","is","Saurabh","Shivam"];
for(let key of arr) {
    console.log(key);
}

arr = [10,15,20];
for(let key of arr) {
    console.log(key);
}
 

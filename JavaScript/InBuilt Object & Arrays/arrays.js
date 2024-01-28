// Creation and Iteration of Array
let arr1 = [1, 2, 4, 5, 6, 9, 8];
console.log(arr1);

// #1 - Iterate By For-Of Loop
console.log("Iterate By For-Of Loop");
for (let value of arr1) {
  console.log(value);
}
// #2 - Iterate By For-Each Loop
console.log("Iterate By For-Each Loop");
arr1.forEach((element) => console.log(element));

let arr2 = [1, 2, 5, 4, 7];
console.log(arr2);

// Insertion In Arrays
console.log("Insertion In Arrays");
// #1 - At Beginning
console.log("At Beginning");
arr2.unshift(10);
console.log(arr2);

// #2 - At End
console.log("At End");
arr2.push(8);
console.log(arr2);

// #3 - At Middle
console.log("At Middle");
arr2.splice(3, 0, 100);
console.log(arr2);

// Searching On Arrays
console.log("Searching On Arrays");
let arr3 = [1, 2, 5, 4, 7];
console.log(arr3);

console.log(arr3.indexOf(5)); //2
console.log(arr3.indexOf(50)); //-1

console.log(arr3.includes(5)); //true
console.log(arr3.includes(50)); //false

// Removing In Arrays
console.log("Removing In Arrays");
let arr4 = [1, 2, 5, 4, 7];
console.log(arr4);

// #1 - At Beginning
console.log("At Beginning");
arr4.shift();
console.log(arr4);

// #2 - At End
console.log("At End");
arr4.pop();
console.log(arr4);

// #3 - At Middle
console.log("At Middle");
arr4.splice(1, 1);
console.log(arr4);

// Emptying An Array
console.log("Emptying An Array");
// #1 - arr - []
let arr = [1, 2, 5, 4, 7];
console.log(arr);

let arr5 = arr;

// #1 - Empty
console.log("Empty");
arr = [];
console.log(arr);
console.log(arr5);

// #2 - length = 0
console.log("length = 0");
let arr6 = arr5;
arr5.length = 0;
console.log(arr5);
console.log(arr6);

// #3 - splice
console.log("splice");
let array = [1, 5, 6, 7, 8, 9];
console.log(array);

array.splice(0, array.length);
console.log(array);

// Combines Two Array
console.log("Combines Two Array");
let first = [1, 2, 3, 4];
let second = [4, 3, 2, 1];

console.log(first, second);

let combine = first.concat(second);
console.log(combine);

// Slicing In Array
console.log("Slicing In Array");
let arr7 = [1, 2, 3, 4, 5, 6];
console.log(arr7);

let newArray = arr7.slice();
console.log(newArray);

newArray = arr7.slice(0, -1);
console.log(newArray);

newArray = arr7.slice(2, 5);
console.log(newArray);

// Spread Operator In Array
console.log("Spread Operator In Array");
// Combines two array
let thrid = [1, 2, 3, 4];
let fourth = [4, 3, 2, 1];

let combine2 = [...thrid, ...fourth];
console.log(combine2);

// Joined In Array
console.log("Joined In Array");
let fifth = [1, 2, 3, 4];

let joined = fifth.join("__");
console.log(joined);

// Split In Array
console.log("Split In Array");
let message = "My Name is Saurabh Shivam";
console.log(message);

let arr8 = message.split(" ");
console.log(arr8);

arr8.forEach((e) => console.log(e));

// Reverse An Array
console.log("Reverse An Array");
let a = [1, 2, 3, 4];
console.log(a);

let reverse = a.reverse();
console.log(reverse);

// Sort An Array
console.log("Sort An Array");
let brr = [10, 45, 30, 46, 5, 14, 67, 46];
console.log(brr);

brr.sort();
console.log(brr); // This sort function sort as a string

// so we have to sort by callback function
let sortedArray = brr.sort((a, b) => a - b);
console.log(sortedArray);

// Filter Array
console.log("Filter Array");
let b = [1, 23, 53, 5, 6, 53, 5, 4, 43, 45, 7, 48, 67, 8, 7, 4, 6, 7, 8, 5];
console.log(b);

// Filter which values are greater than 4 and divde by 4
let ans = b.filter((value) => value > 4 && value % 4 === 0);
console.log(ans);

// Map Function In Array
console.log("Map Function In Array");
let crr = [1, 23, 53, 5, 6, 53, 5, 4, 43, 45, 7, 48, 67, 8, 7, 4, 6, 7, 8, 5];
console.log(crr);

// Mapping Each Number to its corresponding Square
let arrSquare = crr.map((val) => val * val);
console.log(arrSquare);

let objArray = crr.map((val) => {

  return { Element: val };
});
console.log(objArray);

// Reduce In Array
console.log("Reduce In Array");
let drr = [1, 2, 4, 5, 6];
let sum = drr.reduce((totalSum, val) => totalSum + val, 0);
console.log(sum);

// Chaining In Array
console.log("Chaining In Array");
let array1 = [1, 2, 3, 4, 5, 6];
let chain = array1
  .filter((val) => val > 2)
  .map((num) => num * num)
  .filter((val) => val & 1);
console.log(chain);

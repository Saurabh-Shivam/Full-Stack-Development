// Searching on Objects 
let objArray = [
    {
        No : 1,
        Name : 'Saurabh'
    }
    ,
    {
        No : 2,
        Name : 'Shivam'
    }
]

console.log(objArray); 

console.log(objArray.includes({No:1,Name:"Saurabh "})); //present but false

// For this we use callback function 
let obj = objArray.find((obj) => obj.Name === "Saurabh");
console.log(obj);
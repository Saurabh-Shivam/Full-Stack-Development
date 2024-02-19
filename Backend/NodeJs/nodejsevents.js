const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on("WaterFull", () => {
  console.log("Please turn off the motor!");
  setTimeout(() => {
    //setTimeout will show it's output when all the other code has finished running/showing their outputs
    console.log("Please turn off the motor! Its a gentle reminder");
  }, 3000);
});

console.log("The script is running");
myEmitter.emit("WaterFull");
console.log("The script is still running");
myEmitter.emit("WaterFull");

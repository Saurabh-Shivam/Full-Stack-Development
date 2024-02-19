const rectangle = {
  length: 2,
  breadth: 4,

  draw: function () {
    console.log("Drawing rectangle");
  },

  area: function () {
    console.log(`Area of Rectangle: ${rectangle.length * rectangle.breadth}`);
  },
};

console.log(rectangle.length);
console.log(rectangle.breadth);
rectangle.draw();
rectangle.area();

// Add and delete property in object
console.log("Add and delete property in object Starts");
function Rectangle(length, breadth) {
  const rectangle = {
    length,
    breadth,

    draw: function () {
      console.log("Drawing rectangle");
    },
  };
  return rectangle;
}
console.log("Rectangle1 Object Created");
let rectangle1 = Rectangle(10, 20);

// Add Property in Object
rectangle1.area = rectangle1.length * rectangle1.breadth;

console.log(rectangle1.length);
console.log(rectangle1.breadth);
console.log(rectangle1.area);
console.log(rectangle1);

// Now remove properties from Object
delete rectangle1.area;
console.log(rectangle1);

// Check Property In Object
console.log("Object Check Property Starts");
if ("length" in rectangle1) {
  console.log("Length Property Exists in Rectangle");
} else {
  console.log("Absent");
}

// Object Cloning By Iteration
console.log("Object Cloning By Iteration Starts");
const duplicate1 = {};
for (let key in rectangle1) {
  duplicate1[key] = rectangle[key];
}
console.log(duplicate1);

// Object Cloning By Assign
console.log("Object Cloning By Assign Starts");
const duplicate2 = Object.assign({}, rectangle1);
console.log(duplicate2);

// object cloning by spread
console.log("Object Cloning By Spread Starts");
const duplicate3 = { ...rectangle1 };
console.log(duplicate3);

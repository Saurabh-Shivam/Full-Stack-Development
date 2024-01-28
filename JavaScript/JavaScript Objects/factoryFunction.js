// Factory Function is a fucntion which produces objects when we called it
console.log("Factory Function Starts");
function createRectangle() {
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
  return rectangle;
}

let rectangle1 = createRectangle();
console.log(rectangle1.length);

// Custom Object By Factory Function
console.log("Custom Object By Factory Function Starts");
function createRectangle(length, breadth) {
  const rectangle = {
    length,
    breadth,

    draw: function () {
      console.log("Drawing rectangle");
    },

    area: function () {
      console.log(`Area of Rectangle: ${rectangle.length * rectangle.breadth}`);
    },
  };
  return rectangle;
}

let rectangle2 = createRectangle(5, 6);
console.log(rectangle2.length);
rectangle2.area();

let rectangle3 = createRectangle(15, 60);
console.log(rectangle3.length);
rectangle3.area();

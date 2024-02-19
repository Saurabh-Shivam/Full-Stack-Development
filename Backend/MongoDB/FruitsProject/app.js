const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
});

// const fruitSchema = new mongoose.Schema({
//   name: String,
//   rating: Number,
//   review: String
// });

// DATA VALIDATION WITH MONGOOSE

// const fruitSchema = new mongoose.Schema({
//   name: String,
//   rating: {
//     type: Number,
//     min: 1,
//     max: 10
//   },
//   review: String
// });

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please check your data entry, no name specified!!"],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});

//New collection/model created
// Here mongoose will automatically convert the singluar Fruit into Fruits collection inside the mongoose.model method
const Fruit = mongoose.model("Fruit", fruitSchema);

//New document created
const fruit = new Fruit({
  name: "Apple",
  rating: 8,
  review: "Pretty solid as a fruit",
});

// DATA VALIDATION WITH MONGOOSE
//This data will not be added into our database
// const fruit = new Fruit({
//   name: "Apple",
//   rating: 34,
//   review: "Pretty solid as a fruit"
// });

//This data will not be added into our database
// const fruit = new Fruit({
//   rating: 6,
//   review: "Peaches are good"
// });

// This will call the save method to save the Fruit document into the fruits collection inside our fruitsDB
//NOTE:-> Everytime we run the fruit.save() method it will save the same data again and again into our database
// fruit.save();

// const personSchema = new mongoose.Schema({
//   name: String,
//   age: Number
// });

// const Person = mongoose.model("Person", personSchema);

// const person = new Person({
//   name: "Saurabh",
//   age: 19
// });

//ESTABLISHING RELATIONSHIPS AND EMBEDDING DOCUMENTS USING MONGOOSE
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favFruit: fruitSchema,
});

const Person = mongoose.model("Person", personSchema);

const pineapple = new Fruit({
  name: "Pineapple",
  score: 9,
  review: "Great fruit",
});

// pineapple.save();

const mango = new Fruit({
  name: "Mango",
  score: 10,
  review: "King of fruits",
});

// Fruit.updateOne({
//   _id: "61339babc5a1a4b1b63c0852"
// }, {
//   score: 9
// }, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully updated the document!!");
//   }
// });

// mango.save();

// const person = new Person({
//   name: "Saurabh",
//   age: 19
// });

Person.updateOne(
  {
    name: "Saurabh",
  },
  {
    favFruit: "mango",
  },
  function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Successfully added the document");
    }
  }
);

const person = new Person({
  name: "Random",
  age: 15,
  favFruit: pineapple,
});

// person.save();

// CRUD Oeperation in Mongoose

// const kiwi = new Fruit({
//   name: "Kiwi",
//   rating: 10,
//   review: "The best fruit"
// });

// const orange = new Fruit({
//   name: "Orange",
//   rating: 4,
//   review: "Too sour for me"
// });

// const banana = new Fruit({
//   name: "Banana",
//   rating: 9,
//   review: "Weird texture"
// });

// Fruit.insertMany([kiwi, orange, banana], function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully saved all the fruits to fruitsDB");
//   }
// });

//READING FROM OUR DATABASE WITH MONGOOSE
// We tap into the fruits collection through the Fruit model, we call the find function on it and when that is completed and callback gets
//  triggered whether we have got the err or got the result
Fruit.find(function (err, fruits) {
  if (err) {
    console.log(err);
  } else {
    //This close the collection automatically with our database, we no need to manually close it by typing ctrl + c
    // mongoose.connection.close();

    // Array name fruits
    // console.log(fruits);

    //Only getting the name of fruit stored in the fruits collection/array
    fruits.forEach((fruit) => {
      console.log(fruit.name);
    });
  }
});

//UPDATING AND DELETING DATA USING MONGOOSE
// -> Updating
// Fruit.updateOne({
//   _id: "613214d36c2f348d6f619c99"
// }, {
//   name: "strawberry"
// }, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully updated the document!!");
//   }
// });

// -> Deleting
// Fruit.deleteOne({
//   name: "Orange"
// }, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully deleted the document!!");
//   }
// });

// Person.deleteMany({
//   name: "Saurabh"
// }, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully deleted all the documents!!");
//   }
// });

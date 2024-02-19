// step1 - create folder
// step2 - move into that folder
// step3 - npm init -y
// step4 - open folder using vscode
// step5 - npm i express
// step6 - create server.js

const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// const harryMiddleware = (req, res, next)=>{
//   console.log(req)
//   next()
// }

//  used to parse req.
const bodyParser = require("body-parser");
// parse JSON data & add it to the request.Body object
app.use(bodyParser.json());

// Routes
app.get("/", (req, res) => {
  res.send("This route is working");
});

// display html page in the public folder
app.use(express.static(path.join(__dirname, "public")));
// app.use(harryMiddleware)

app.get("/hello/:name", (req, res) => {
  res.send("Hello World!" + req.params.name);
});

app.get("/about", (req, res) => {
  //   res.send('about')
  // res.sendFile(path.join(__dirname, 'index.html'))
  // res.status(500)
  res.json({
    harry: 34,
  });
});

app.post("/api/cars", (req, res) => {
  const { name, brand } = req.body;
  console.log(name);
  console.log(brand);
  res.send("Car Submitted");
});

// connecting mongoDB with the help of mongoose
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connection established");
  })
  .catch((error) => console.log(error));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

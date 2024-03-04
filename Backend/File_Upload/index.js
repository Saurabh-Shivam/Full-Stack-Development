// app create
const express = require("express");
const app = express();

require("dotenv").config();
// finding port
const PORT = process.env.PORT || 3000;

// middleware to parse json request body
app.use(express.json());
// middleware to upload file
const fileUpload = require("express-fileupload");
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

// connecting with DB
const db = require("./config/database");
db.connect();

// connecting with cloudinary
const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryConnect();

// mounting api routes
const Upload = require("./routes/FileUpload");
app.use("/api/v1/upload", Upload);

// activating the route
app.listen(PORT, () => {
  console.log(`Server started successfully at ${PORT}`);
});

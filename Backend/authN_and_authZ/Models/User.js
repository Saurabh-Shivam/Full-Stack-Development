const mongoose = require("mongoose");

// creating schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    trim: true,
  },
  email: {
    type: String,
    require: true,
    trim: true,
  },
  password: {
    type: String,
    require: true,
  },
  role: {
    type: String,
    enum: ["Admin", "Student", "Visitor"],
  },
});

// exporting.the model
module.exports = mongoose.model("User", userSchema);

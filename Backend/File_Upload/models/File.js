const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
require("dotenv").config();

// creating schema
const fileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
  tags: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
});

// post middleware
// doc ->  the entry which is created in our database is referred to as doc here
fileSchema.post("save", async function (doc) {
  try {
    console.log("Doc -> ", doc);
    // TODO: Shift this configuration under /config folder
    // creating transporter -> refer to nodemailer documentation
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // send mail -> refer to nodemailer documentation
    let info = await transporter.sendMail({
      from: `FileUploader Project - Saurabh`,
      to: doc.email,
      subject: "New File Uploaded on Cloudinary",
      html: `<h2>Hello Jee</h2> <p>File Uploaded View here: <a href="${doc.imageUrl}">${doc.imageUrl}</a></p>`,
    });

    console.log(info);
  } catch (error) {
    console.log(error);
  }
});

// creating and exporting model
const File = mongoose.model("File", fileSchema);
module.exports = File;

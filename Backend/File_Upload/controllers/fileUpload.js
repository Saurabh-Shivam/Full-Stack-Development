const File = require("../models/File");
const cloudinary = require("cloudinary").v2;

// local file upload handler function
exports.localFileUpload = async (req, res) => {
  try {
    // fetching file from request
    //  req.files.file -> here .file is the key name which we will be using in postman form-data section of body
    const file = req.files.file;
    console.log("File received", file);

    // creating path where file need to be stored on server
    // __dirname -> indicates the current director
    // path -> server path
    let path =
      __dirname + "/files/" + Date.now() + `.${file.name.split(".")[1]}`;
    console.log("Server Path -> ", path);

    // file.mv -> add path to the move function
    // file which is send on request ìs send to a server's particular path/location
    file.mv(path, (err) => {
      console.log(err);
    });

    // creating a successful response
    res.json({
      success: true,
      message: "Local File Uploaded Successfully",
    });
  } catch (error) {
    console.log("Not able to upload the file on server");
    console.log(error);
  }
};

function isFileTypeSupported(type, supportedTypes) {
  return supportedTypes.includes(type);
}

// function to upload on cloudinary ->> from cloudinary documentation
async function uploadFileToCloudinary(file, folder) {
  const options = { folder };
  console.log("Temp file path ->", file.tempFilePath);
  // automatically detect the file type
  options.resource_type = "auto";
  return await cloudinary.uploader.upload(file.tempFilePath, options);
}

// image upload handler function
exports.imageUpload = async (req, res) => {
  try {
    // fetching data
    const { name, tags, email } = req.body;
    console.log(name, tags, email);
    const file = req.files.imageFile;
    console.log(file);

    // validation
    const supportedTpyes = ["jpg", "jpeg", "png"];
    const fileType = file.name.split(".")[1].toLowerCase();
    console.log(fileType);
    // TODO: add a upper limit image
    if (!isFileTypeSupported(fileType, supportedTpyes)) {
      return res.status(400).json({
        success: false,
        message: "File format not supported",
      });
    }

    // if file format is supported upload on cloudinary
    console.log(
      "Uploading to cloudinary folder I created -> FileUploader_Project"
    );
    const response = await uploadFileToCloudinary(file, "FileUploader_Project");
    console.log(response);

    // making db entry
    const fileData = await File.create({
      name,
      tags,
      email,
      imageUrl: response.secure_url,
    });

    // create a successful response
    res.json({
      success: true,
      imageUrl: response.secure_url,
      message: "Image Successfully Uploaded",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

// video upload handler function
exports.videoUpload = async (req, res) => {
  try {
    // fetching data
    const { name, tags, email } = req.body;
    console.log(name, tags, email);
    const file = req.files.videoFile;
    console.log(file);

    // validation
    const supportedTpyes = ["mp4", "mov"];
    const fileType = file.name.split(".")[1].toLowerCase();
    console.log(fileType);
    // TODO: add a upper limit of 5MB for video
    if (!isFileTypeSupported(fileType, supportedTpyes)) {
      return res.status(400).json({
        success: false,
        message: "File format not supported",
      });
    }
    // if file format is supported upload on cloudinary
    console.log(
      "Uploading to cloudinary folder I created -> FileUploader_Project"
    );
    const response = await uploadFileToCloudinary(file, "FileUploader_Project");
    console.log(response);

    // making db entry
    const fileData = await File.create({
      name,
      tags,
      email,
      imageUrl: response.secure_url,
    });

    // create a successful response
    res.json({
      success: true,
      imageUrl: response.secure_url,
      message: "Image Successfully Uploaded",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

const File = require("../models/File");

// localFileUload -> handler function
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

    // create a successful response
    res.json({
      success: true,
      message: "Local File Uploaded Successfully",
    });
  } catch (error) {
    console.log("Not able to upload the file on server");
    console.log(error);
  }
};

const mongoose = require("mongoose");

require("dotenv").config();

exports.connct = () => {
  mongoose.connect(
    (process.env.MONGODB_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
      .then(console.log("DB Connect Successful"))
      .catch((error) => {
        console.log("DB Connection Issues");
        console.log(error);
        process.exit(1);
      })
  );
};

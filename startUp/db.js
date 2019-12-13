const mongoose = require("mongoose");
const { MONGO_URI } = require("../config/keys");

module.exports = () => {
  mongoose.Promise = global.Promise;
  mongoose
    .connect(MONGO_URI,{ useMongoClient:true })
    .then(() => console.log("MongoDB Connected..."))
    .catch(err => console.log("Error to connect database :: ", err));
};

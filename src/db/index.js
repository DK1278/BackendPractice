const mongoose = require("mongoose");

const MONGODB_URL = process.env.MONGODB_URL;
const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected:", MONGODB_URL);
  } catch (error) {
    console.log("mongodb connection error: " + error);
  }
};
module.exports = connectDB;

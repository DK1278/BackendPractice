const mongoose = require("mongoose");

const MONGODB_URL = process.env.MONGODB_URL;
const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log("MongoDB Connected:", MONGODB_URL);
  } catch (error) {
    console.log("mongodb connection error: " + error);
    process.exit(1);
  }
};
module.exports = connectDB;

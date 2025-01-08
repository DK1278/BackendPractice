const mongoose = require("mongoose");
const apiError = require("../utils/apiError");
const MONGODB_URL = process.env.MONGODB_URL;
const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log("MongoDB Connected:", MONGODB_URL);
  } catch (error) {
    const err = new apiError(500, "Couldn't connect to MongoDB", [error]);
    console.error(err);
  }
};
module.exports = connectDB;

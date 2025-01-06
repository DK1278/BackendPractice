require("dotenv").config();
// const mongoose = require("mongoose");
// const DB_NAME = require("./constants");
const express = require("express");
const connectDB = require("../src/db/index.js");
const app = express();

const port = process.env.PORT || 9000;
connectDB();

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URL}`, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     console.log("Connected to MongoDB successfully!");
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error.message);
//   }
// })();
app.listen(port, () => {
  console.log("Server is running at port : " + port);
});

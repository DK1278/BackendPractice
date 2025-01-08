const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const CORS_ORIGIN = process.env.CORS_ORIGIN;

console.log(CORS_ORIGIN);
app.use(cors()); //use for frontend backend api connection for whice site requests send in browser

var corsOptions = {
  origin: CORS_ORIGIN,
};  // hear add url which requests send in browser

app.use(express.json()); // user pass data json format so backend understands it
app.use(express.urlencoded({ extended: true })); // user for some time url name + name and some time url name %20 name pass so code understand both is right that is use 

module.exports = app;

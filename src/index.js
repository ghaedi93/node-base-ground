const express = require("express"),
  bodyParser = require("body-parser");
const app = express();
//make the folder public accessable as if its root
app.use(express.static("public"));
//parse incoming requests with bodyParser
app.use(bodyParser.json());
console.log("starting application...");

module.exports = app;

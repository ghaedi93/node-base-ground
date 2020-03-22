const express = require("express"),
  bodyParser = require("body-parser");
const name = "javad";
function start() {
  return new Promise(resolve => {
    console.log("starting application...");
    const app = express();
    //make the folder public accessable as if its root
    app.use(express.static("public"));
    //parse incoming requests with bodyParser
    app.use(bodyParser.json());
    //creates an app in global scope of applicaton
    global.app = app;
    //resolving promise
    resolve(app);
  });
}

module.exports = { start };

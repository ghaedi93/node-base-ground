const application = {
  start: () => {
    return new Promise(resolve => {
      const express = require("express"),
        bodyParser = require("body-parser");
      const app = express();
      //make the folder public accessable as if its root
      app.use(express.static("public"));
      //parse incoming requests with bodyParser
      app.use(bodyParser.json());
      global.app = app;
      resolve();
      console.log("starting application...");
    });
  }
};

module.exports = application;

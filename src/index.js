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
    //parse incoming requests with urlencoded format
    app.use(bodyParser.urlencoded({ extended: true }));
    //creates an app in global scope of applicaton
    global.app = app;
    //resolving promise
    resolve();
  });
}
function addRoutes() {
  return new Promise(resolve => {
    const usersRoute = require("./routes/users");
    const testRoute = require("./routes/testAthentication");

    app.use("/users", usersRoute);
    app.use("/test", testRoute);
    resolve();
  });
}
function addAthentication() {
  return new Promise(resolve => {
    const passport = require("passport");
    const { checkJwt } = require("../config/passport");
    //Passport middleware
    app.use(passport.initialize());
    //Passport Configuration
    checkJwt(passport);
    resolve();
  });
}

module.exports = { start, addRoutes, addAthentication };

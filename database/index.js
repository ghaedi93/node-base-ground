const mongoose = require("mongoose");
const { mongoUrl } = require("../config");
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);

function connect() {
  return new Promise(resolve => {
    mongoose
      .connect(mongoUrl)
      .then(() => {
        console.log(`Connecting to ${mongoUrl} as mongo database ...`);
        resolve();
      })
      .catch(err => console.log(err));
  });
}

function close() {
  return new Promise(resolve => {
    mongoose.disconnect();
  });
}
module.exports = mongoDb = { connect, close };

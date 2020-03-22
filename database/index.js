const mongoDb = {
  start: () => {
    return new Promise(resolve => {
      const mongoose = require("mongoose");
      const { mongoUrl } = require("../config");
      mongoose.set("useNewUrlParser", true);
      mongoose.set("useFindAndModify", false);
      mongoose.set("useCreateIndex", true);
      mongoose.set("useUnifiedTopology", true);

      const startConnection = mongoose
        .connect(mongoUrl)
        .then(() => {
          console.log(`Connecting to ${mongoUrl} as mongo database ...`);
          resolve();
        })
        .catch(err => console.log(err));
    });
  }
};
module.exports = mongoDb;

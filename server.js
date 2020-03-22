let application = require("./src");
const { PORT } = require("./config");
const mongoDb = require("./database");

async function server() {
  //connecting to mongodb database
  await mongoDb.connect();
  //starting application and making the global app variable
  await application.start();

  app.listen(PORT, () => {
    console.log(`starting server on port ${PORT}...`);
  });
}
server();

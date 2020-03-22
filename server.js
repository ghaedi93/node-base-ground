const application = require("./src");
const { PORT } = require("./config");
const mongoDb = require("./database");

async function server() {
  await mongoDb.start();
  await application.start();
  app.listen(PORT, () => {
    console.log(`starting server on port ${PORT}...`);
  });
}
server();

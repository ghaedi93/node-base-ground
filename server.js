const app = require("./src");
const { PORT } = require("./config");
const startConnection = require("./database");
app.listen(PORT, () => {
  console.log(`starting server on port ${PORT}`);
});

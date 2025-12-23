const express = require("express");
const handleMongoDbConnection = require("./connection");
const URL = require("./models/url");
const { handleGenerateShortURL } = require("./controller/url");
const router = require("./routes/url");

const url = "mongodb://127.0.0.1:27017/url";
const PORT = "8001";
const app = express();

app.use(express.json());

app.use("/url", router);

(async () => {
  await handleMongoDbConnection(url);
  console.log("Database conection is established");
  app.listen(PORT, () => {
    console.log(`Server is listening at ${PORT}`);
  });
})();

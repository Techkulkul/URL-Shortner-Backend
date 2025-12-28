const express = require("express");
const path = require("path");
const handleMongoDbConnection = require("./connection");
const URL = require("./models/url");
const { handleGenerateShortURL } = require("./controller/url");
const router = require("./routes/url");
const staticRouter = require("./routes/staticRoute");
const userRouter = require("./routes/user");
const cookieParser = require("cookie-parser");
const { userAuth } = require("./middlewares/auth");

const url = "mongodb://127.0.0.1:27017/url";
const PORT = "8001";
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use("/", staticRouter);
app.use("/url", userAuth, router);
app.use(
  "/user",
  (req, res, next) => {
    console.log("3");
    next();
  },
  userRouter
);

(async () => {
  await handleMongoDbConnection(url);
  console.log("Database conection is established");
  app.listen(PORT, () => {
    console.log(`Server is listening at ${PORT}`);
  });
})();

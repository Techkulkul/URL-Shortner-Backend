const express = require("express");

const PORT = "8001";
const app = express();

app.use("/", (req, res) => {
  res.send("Hii");
});

app.listen(PORT, () => {
  console.log(`Server is listening at ${PORT}`);
});

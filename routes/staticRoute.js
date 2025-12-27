const express = require("express");
const URL = require("../models/url");

const router = express.Router();

router.get("/", async (req, res) => {
  const allURL = await URL.find({});
  res.render("home", {
    x: allURL,
  });
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

module.exports = router;

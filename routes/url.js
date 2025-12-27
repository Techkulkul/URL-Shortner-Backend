const express = require("express");
const {
  handleGenerateShortURL,
  handleRedirectUrl,
  handleAnalytics,
} = require("../controller/url");

const router = express.Router();

router.post("/", handleGenerateShortURL);

router.get("/:id", handleRedirectUrl);

router.get("/analytics/:id", handleAnalytics);

module.exports = router;

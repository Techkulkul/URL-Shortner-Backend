const express = require("express");
const {
  handleGenerateShortURL,
  handleRedirectUrl,
  handleAnalytics,
} = require("../controller/url");

const router = express.Router();

router.post("/url", handleGenerateShortURL);

router.get("/:id", handleRedirectUrl);

router.get("/url/analytics/:id", handleAnalytics);

module.exports = router;

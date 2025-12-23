const shortId = require("shortid");
const URL = require("../models/url");

async function handleGenerateShortURL(req, res) {
  const url = req.body.url;
  if (!url) return res.status(400).json({ message: "url is mandatory" });
  const shortUrl = shortId.generate();
  await URL.create({
    shortId: shortUrl,
    redirectURL: url,
    visitHistory: [],
  });
  res.status(201).json({ shortUrl: shortUrl });
}

module.exports = {
  handleGenerateShortURL,
};

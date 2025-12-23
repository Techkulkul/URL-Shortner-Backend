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

async function handleRedirectUrl(req, res) {
  const shortUrl = req.params.id;
  if (!shortUrl) return res.status(400).json({ message: "send shortUrl" });
  const result = await URL.findOneAndUpdate(
    {
      shortId: shortUrl,
    },
    {
      $push: {
        visitHistory: { timestamps: Date.now() },
      },
    }
  );
  res.redirect(result.redirectURL);
}

async function handleAnalytics(req, res) {
  const shortUrl = req.params.id;
  if (!shortUrl)
    return res.status(400).json({ message: "shortUrl is compulsory" });
  const result = await URL.findOne({
    shortId: shortUrl,
  });
  res.status(200).json({
    clicked: result.visitHistory.length,
    data: result.visitHistory,
  });
}

module.exports = {
  handleGenerateShortURL,
  handleRedirectUrl,
  handleAnalytics,
};

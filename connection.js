const mongoose = require("mongoose");

async function handleMongoDbConnection(url) {
  return await mongoose.connect(url);
}

module.exports = handleMongoDbConnection;

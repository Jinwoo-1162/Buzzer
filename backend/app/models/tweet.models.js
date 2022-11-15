const mongoose = require("mongoose");

const tweetSchema = mongoose.Schema({
  author: String,
  bodyText: String,
  likes: Number,
});

module.exports = mongoose.model("tweet", tweetSchema);

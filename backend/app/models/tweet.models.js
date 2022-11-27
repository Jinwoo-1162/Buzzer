const mongoose = require("mongoose");

const tweetSchema = mongoose.Schema({
  author: String,
  bodyText: String,
  media: String,
  comments: Number,
  retweets: Number,
  likes: Number,
  timeStamp: Date,
});

module.exports = mongoose.model("tweet", tweetSchema);

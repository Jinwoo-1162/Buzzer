const mongoose = require("mongoose");
const User = require("./user.models");

const tweetSchema = mongoose.Schema({
  user: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  text: String,
  likes: Number,
  retweets: Number,
  date: { Date, default: Date.now },
});

module.exports = mongoose.model("tweet", tweetSchema);

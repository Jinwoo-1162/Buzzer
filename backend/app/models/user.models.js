const mongoose = require("mongoose");

const UserSchema = new Schema({
  name: String,
  nickname: String,
  email: String,
  followers: Number,
  following: Number,
});

let User = mongoose.model("User", UserSchema);
module.exports = User;

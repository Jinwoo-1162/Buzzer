module.exports = (app) => {
  const tweet = require("../controllers/tweet.controllers.js");

  // Retrieve all tweets
  app.get("/tweet", tweet.find);

  // Retrieves tweets accordng to name
  app.get("/tweet/user/:name", tweet.findByName);

  //Retrives tweets according to keywords
  app.get("/tweet/:content", tweet.findByContent);

  // Adds a tweet
  app.post("/tweet/add", tweet.addOne);

  // claire??
  app.put("/tweet/updateLike/:_id", tweet._id);
};

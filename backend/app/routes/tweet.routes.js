module.exports = (app) => {
  const user = require("../controllers/tweet.controllers.js");

  app.get("/tweet", tweet.find);

  app.get("/tweet/:name", tweet.findByName);

  app.post("/tweet/add", tweet.addOne);
};

module.exports = (app) => {
  const user = require("../controllers/user.controllers.js");

  // Retrieve all samples
  app.get("/user", user.find);

  // Retrieves samples accordng to name
  app.get("/user/:name", user.findByName);

  // Adds a sample
  app.post("/user/add", user.addOne);
};

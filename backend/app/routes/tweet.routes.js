module.exports = (app) => {
    const tweet = require('../controllers/tweet.controllers.js');

    // Retrieve all samples
    app.get('/tweet', tweet.find);

    // Retrieves samples accordng to name
    app.get('/tweet/:name', tweet.findByName);

    // Adds a sample
    app.post('/tweet/add', tweet.addOne);
}

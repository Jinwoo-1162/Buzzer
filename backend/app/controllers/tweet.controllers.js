const Tweet = require('../models/tweet.models.js');

exports.find = async (req, res) => {
    await Tweet.find({})
    .then(tweets => {
        res.send(tweets);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving tweets."
        });
    });
};

exports.findByName = async (req, res) => {
    await Tweet.find({name: req.params.author})
    .then(tweets => {
        if(!tweets) {
            return res.status(404).send({
                message: `No entries in database Tweet not found with name ${req.params.author}`
            });
        }
        res.send(tweets);
    }).catch(err => {
        return res.status(500).send({
            message: `Error retrieving Tweet with name ${req.params.author}`
        });
    });
};

exports.addOne = async (req, res) => {
    const newTweet = new Tweet({
        author: req.query.author,
        bodyText: req.query.bodyText,
        comments: 0,
        retweets: 0,
        likes: 0,
        timeStamp: new Date(),
    });

    newTweet.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send(err);
    });
};

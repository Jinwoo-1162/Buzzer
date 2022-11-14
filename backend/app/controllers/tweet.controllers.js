const Tweet = require("../models/tweet.models.js");

exports.find = async (req, res) => {
  await Tweet.find({})
    .then((Tweets) => {
      res.send(Tweets);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving tweet.",
      });
    });
};

exports.findByName = async (req, res) => {
  await Tweet.find({ name: req.params.name })
    .then((Tweets) => {
      if (!Tweets) {
        return res.status(404).send({
          message: `No entries in database tweet found with name ${req.params.name}`,
        });
      }
      res.send(Tweets);
    })
    .catch((err) => {
      return res.status(500).send({
        message: `Error retrieving tweet with name ${req.params.name}`,
      });
    });
};

exports.addOne = async (req, res) => {
  const newTweet = new Tweet({
    user: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    text: "",
    likes: 0,
    retweets: 0,
    shares: 0,
    date: { Date, default: Date.now },
  });

  newTweet
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

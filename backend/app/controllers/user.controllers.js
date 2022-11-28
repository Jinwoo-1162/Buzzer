const User = require("../models/user.models.js");

exports.find = async (req, res) => {
  await User.find({})
    .then((Users) => {
      res.send(Users);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving user.",
      });
    });
};

exports.findByName = async (req, res) => {
  await User.find({ name: req.params.name })
    .then((Users) => {
      if (!Users) {
        return res.status(404).send({
          message: `No entries in database user not found with name ${req.params.name}`,
        });
      }
      res.send(Users);
    })
    .catch((err) => {
      return res.status(500).send({
        message: `Error retrieving user with name ${req.params.name}`,
      });
    });
};

exports.addOne = async (req, res) => {
  const newUser = new User({
    name: "",
    nickname: "",
    email: "",
    followers: 0,
    following: 0,
  });

  newUser
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

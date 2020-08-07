const { sendAllTopics } = require("../models/topicsModel");

exports.getAllTopics = (req, res, next) => {
  sendAllTopics()
    .then((topics) => {
      res.status(200).send({ topics: topics });
    })
    .catch((err) => {
      next(err);
    });
};

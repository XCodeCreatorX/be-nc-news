const { sendAllTopics } = require("../models/topicsModel");

exports.getAllTopics = (req, res, next) => {
  sendAllTopics()
  .then((topics) => {
    res.status(200).send({ topics });
  })
  .catch((err) => {
    console.log(err)
  })
};

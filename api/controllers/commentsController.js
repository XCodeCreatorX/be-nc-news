const { createAComment } = require("../models/topicsModel");

exports.postAComment = (req, res, next) => {
  res.status(200).send({ msg: "Successful" });
}
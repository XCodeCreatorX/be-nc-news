const { sendUserByName } = require("../models/usersModel");

exports.getUserByName = (req, res, next) => {
  const username = req.params.username;
  sendUserByName(username)
    .then((user) => {
      res.status(200).send({ user: user });
    })
    .catch((err) => {
      next(err);
    });
};

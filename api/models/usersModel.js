const connection = require("../connection");

exports.sendUserByName = (username) => {
  return connection
    .select("*")
    .from("users")
    .where("username", username)
    .then((user) => {
      console.log(user)
      return user;
    });
};

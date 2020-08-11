const connection = require("../connection");

exports.sendUserByName = (username) => {
  return connection
    .select("*")
    .from("users")
    .where("username", username)
    .then((user) => {
      if (user.length > 0) {
        return user;
      } else {
        return Promise.reject({
          status: 404,
          msg: "User does not exist.",
        });
      }
    });
};

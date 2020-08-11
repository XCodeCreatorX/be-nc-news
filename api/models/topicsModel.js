const connection = require("../connection");

exports.sendAllTopics = () => {
  return connection.select("*").from("topics")
}
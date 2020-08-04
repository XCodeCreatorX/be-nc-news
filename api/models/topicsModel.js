const connection = require("../connection");

exports.sendAllTopics = () => {
  return connection("topics").then(topics => {
    return topics;
  })
}
const connection = require("../connection");

exports.sendArticleByID = (id) => {
  return connection
    .select("*")
    .from("articles")
    .where("article_id", id)
    .then((article) => {
      return article;
    });
};

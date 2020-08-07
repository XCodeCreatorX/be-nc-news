const connection = require("../connection");

exports.sendArticleByID = (id) => {
  return connection
    .select("articles.*")
    .from("articles")
    .where("articles.article_id", id)
    .join("comments", "comments.article_id", "articles.article_id")
    .groupBy("articles.article_id")
    .count("comments.comment_id as comment_count")

    .then((articles) => {
      if (articles.length < 1) {
        return Promise.reject({ status: 400, msg: "Article does not exist." });
      } else {
        return articles[0];
      }
    });
};

exports.editArticleByID = (id, inc_votes) => {
  return connection("articles")
    .where("article_id", i)
    .then((article) => {
      return article;
    });
};

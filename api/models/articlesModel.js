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
        return Promise.reject({ status: 404, msg: "Article does not exist." });
      } else {
        return articles[0];
      }
    });
};

exports.editArticleByID = (id, inc_votes) => {
  return connection
    .select("articles.*")
    .from("articles")
    .count("comments.comment_id as comment_count")
    .increment("votes", inc_votes)
    .returning("*")
    .then((updatedArticle) => {
      return updatedArticle[0]
    })
};

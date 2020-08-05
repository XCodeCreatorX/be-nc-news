const { sendArticleByID } = require("../models/articlesModel");

exports.getArticleByID = (req, res, next) => {
  const id = req.params.id;
  sendArticleByID(id)
    .then((article) => {
      res.status(200).send({ "article" : article });
    })
    .catch((err) => {
      console.log(err);
    });
};

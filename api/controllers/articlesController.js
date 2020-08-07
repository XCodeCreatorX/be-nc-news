const { sendArticleByID, editArticleByID } = require("../models/articlesModel");

exports.getArticleByID = (req, res, next) => {
  const id = req.params.id;
  sendArticleByID(id)
    .then((article) => {
      res.status(200).send({ article: article });
    })
    .catch((err) => {
      next(err);
    });
};

exports.patchArticleByID = (req, res, next) => {
  const { id } = req.params;
  const inc_votes = req.body.inc_votes;

  editArticleByID(id, inc_votes).then((article) => {
    res.status(200).send({ article: article });
  });
};

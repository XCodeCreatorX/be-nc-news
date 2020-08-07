const articlesRouter = require("express").Router();
const {
  getArticleByID,
  patchArticleByID,
} = require("../controllers/articlesController");
const { postAComment } = require("../controllers/commentsController");

articlesRouter.route("/:id").get(getArticleByID).patch(patchArticleByID);

articlesRouter.route("/:id/comments").post(postAComment);

module.exports = articlesRouter;

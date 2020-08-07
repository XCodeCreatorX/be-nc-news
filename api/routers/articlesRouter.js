const articlesRouter = require("express").Router()
const { getArticleByID, patchArticleByID } = require("../controllers/articlesController")

articlesRouter.get("/:id", getArticleByID);
articlesRouter.patch("/:id", patchArticleByID)

module.exports = articlesRouter;
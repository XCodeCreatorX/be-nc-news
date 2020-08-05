const articlesRouter = require("express").Router()
const { getArticleByID } = require("../controllers/articlesController")

articlesRouter.get("/:id", getArticleByID);

module.exports = articlesRouter;
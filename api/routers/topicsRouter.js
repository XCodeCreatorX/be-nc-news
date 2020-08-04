const topicsRouter = require("express").Router()
const { getAllTopics } = require("../controllers/topicsController")

topicsRouter.get("/", getAllTopics)

module.exports = topicsRouter;
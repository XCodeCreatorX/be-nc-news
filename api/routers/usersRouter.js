const usersRouter = require("express").Router();
const { getUserByName } = require("../controllers/usersController");

usersRouter.route("/:username").get(getUserByName)

module.exports = usersRouter;
 
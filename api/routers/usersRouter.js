const usersRouter = require("express").Router();
const { getUserByName } = require("../controllers/usersController");

usersRouter.get("/:username", getUserByName);

module.exports = usersRouter;
 
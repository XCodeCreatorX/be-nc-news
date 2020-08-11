const express = require("express");
const app = express();
const apiRouter = require("./routers/apiRouter");
const { customError } = require("./errors/index");

app.use(express.json())
app.use("/api", apiRouter);
app.use(customError);


app.all("*", (req, res, next) => {
  res.status(404).send({ msg: "Path does not exist." });
});

module.exports = app; 
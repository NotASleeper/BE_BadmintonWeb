const express = require("express");
const { categoriesRouter } = require("./categories.routers");
const { usersRouter } = require("./users.routers");

const rootRouter = express.Router();

rootRouter.use("/categories", categoriesRouter);
rootRouter.use("/users", usersRouter);

module.exports = {
  rootRouter,
};

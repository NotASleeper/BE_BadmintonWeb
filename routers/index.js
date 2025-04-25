const express = require("express");
const { categoriesRouter } = require("./categories.routers");
const { usersRouter } = require("../models/users");

const rootRouter = express.Router();

rootRouter.use("/categories", categoriesRouter);
rootRouter.use("/users", usersRouter);

module.exports = {
  rootRouter,
};

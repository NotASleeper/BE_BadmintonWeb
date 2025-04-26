const express = require("express");
const { categoriesRouter } = require("./categories.routers");
const { usersRouter } = require("./users.routers");
const { roleRouter } = require("./roles.routers");

const rootRouter = express.Router();

rootRouter.use("/categories", categoriesRouter);
rootRouter.use("/users", usersRouter);
rootRouter.use("/roles", roleRouter);

module.exports = {
  rootRouter,
};

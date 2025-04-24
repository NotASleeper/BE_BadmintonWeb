const express = require("express");
const { categoriesRouter } = require("./categories.routers");

const rootRouter = express.Router();

rootRouter.use("/categories", categoriesRouter);

module.exports = {
  rootRouter,
};

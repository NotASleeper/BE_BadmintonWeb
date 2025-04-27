const express = require("express");
const { categoriesRouter } = require("./categories.routers");
const { usersRouter } = require("./users.routers");
const { roleRouter } = require("./roles.routers");
const { productRouter } = require("./products.routers");
const { reviewsRouter } = require("./reviews.routers");
const { promotionsRouter } = require("./promotions.routers");
const { cartsRouter } = require("./carts.routers");

const rootRouter = express.Router();

rootRouter.use("/categories", categoriesRouter);
rootRouter.use("/users", usersRouter);
rootRouter.use("/roles", roleRouter);
rootRouter.use("/products", productRouter);
rootRouter.use("/reviews", reviewsRouter);
rootRouter.use("/promotions", promotionsRouter);
rootRouter.use("/carts", cartsRouter);

module.exports = {
  rootRouter,
};

const express = require("express");
const {
  createCarts,
  getAllCarts,
  getDetailCarts,
  updateCarts,
  deleteCarts,
} = require("../controllers/carts.controllers");

const cartsRouter = express.Router();

cartsRouter.post("/", createCarts);
cartsRouter.get("/", getAllCarts);
cartsRouter.get("/:id", getDetailCarts);
cartsRouter.put("/:id", updateCarts);
cartsRouter.delete("/:id", deleteCarts);

module.exports = {
  cartsRouter,
};

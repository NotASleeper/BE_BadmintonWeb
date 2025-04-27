const express = require("express");
const {
  createProducts,
  getAllProducts,
  getDetailProducts,
  updateProducts,
  deleteProducts,
} = require("../controllers/products.controllers");

const productRouter = express.Router();

productRouter.post("/", createProducts);
productRouter.get("/", getAllProducts);
productRouter.get("/:id", getDetailProducts);
productRouter.put("/:id", updateProducts);
productRouter.delete("/:id", deleteProducts);

module.exports = {
  productRouter,
};

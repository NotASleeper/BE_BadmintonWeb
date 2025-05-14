const express = require("express");
const { Products } = require("../models");
const {
  createProducts,
  getAllProducts,
  getDetailProducts,
  updateProducts,
  deleteProducts,
} = require("../controllers/products.controllers");
const { checkExist } = require("../middlewares/validation/checkExist");

const productRouter = express.Router();

productRouter.post("/", createProducts);
productRouter.get("/", getAllProducts);
productRouter.get("/:id", getDetailProducts);
productRouter.put("/:id", checkExist(Products), updateProducts);
productRouter.delete("/:id", checkExist(Products), deleteProducts);

module.exports = {
  productRouter,
};

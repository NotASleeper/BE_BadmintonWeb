const express = require("express");
const {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
  getOrderByUserId,
  getTotalOrderAmount,
} = require("../controllers/orders.controllers");

const orderRouter = express.Router();

orderRouter.post("/", createOrder);
orderRouter.get("/", getAllOrders);
orderRouter.get("/:id", getOrderById);
orderRouter.put("/:id", updateOrder);
orderRouter.delete("/:id", deleteOrder);
orderRouter.get("/user/:userid", getOrderByUserId);
orderRouter.get("/total/time", getTotalOrderAmount);

module.exports = {
  orderRouter,
};

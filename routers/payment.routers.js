const express = require("express");
const {
  createPayment,
  checkPaymentVNPAY,
} = require("../controllers/payment.controllers");

const paymentRouter = express.Router();

paymentRouter.post("/create-qr", createPayment);
paymentRouter.get("/check-payment-vnpay", checkPaymentVNPAY);

module.exports = paymentRouter;

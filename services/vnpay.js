const {
  VNPay,
  ignoreLogger,
  ProductCode,
  VnpLocale,
  dateFormat,
} = require("vnpay");
require("dotenv").config();

const paymentVNPAY = async (orderid, totalprice, res) => {
  const vnpay = new VNPay({
    tmnCode: process.env.VNPAY_TMN_CODE, // Your TMN code
    secureSecret: process.env.VNPAY_SECRET, // Your secure secret
    vnpayHost: "https://sandbox.vnpayment.vn", // VNPAY host URL
    testMode: true, // Set to false for production
    loggerFn: ignoreLogger, // Use ignoreLogger to disable logging
  });

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1); // Set to tomorrow's date

  const vnpayResponse = await vnpay.buildPaymentUrl({
    vnp_Amount: totalprice, // Amount in VND
    vnp_IpAddr: "127.0.0.1",
    vnp_TxnRef: orderid,
    vnp_OrderInfo: `${orderid}`,
    vnp_OrderType: ProductCode.Other,
    vnp_ReturnUrl: `http://localhost:3000/api/v1/payment/check-payment-vnpay`,
    vnp_Locale: VnpLocale.VN, // 'vn' hoặc 'en'
    vnp_CreateDate: dateFormat(new Date()), // Current date in yyyymmddHHmmss format
    vnp_ExpireDate: dateFormat(tomorrow),
  });

  return res.status(201).json(vnpayResponse);
};

module.exports = {
  paymentVNPAY,
};

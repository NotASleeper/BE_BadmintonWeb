const {
  VNPay,
  ignoreLogger,
  ProductCode,
  VnpLocale,
  dateFormat,
} = require("vnpay");

const paymentVNPAY = async (req, res) => {
  const vnpay = new VNPay({
    tmnCode: "XNTVN8SY", // Your TMN code
    secureSecret: "WTO0YMF7NHTNQ314HCQOO5Y1CC33EH6Q", // Your secure secret
    vnpayHost: "https://sandbox.vnpayment.vn", // VNPAY host URL
    testMode: true, // Set to false for production
    loggerFn: ignoreLogger, // Use ignoreLogger to disable logging
  });

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1); // Set to tomorrow's date

  const vnpayResponse = await vnpay.buildPaymentUrl({
    vnp_Amount: 100000, // Amount in VND
    vnp_IpAddr: "127.0.0.1",
    vnp_TxnRef: "12345678",
    vnp_OrderInfo: `123456`,
    vnp_OrderType: ProductCode.Other,
    vnp_ReturnUrl: `http://localhost:3000/api/v1/carts/vnpay/check-payment-vnpay`,
    vnp_Locale: VnpLocale.VN, // 'vn' hoặc 'en'
    vnp_CreateDate: dateFormat(new Date()), // Current date in yyyymmddHHmmss format
    vnp_ExpireDate: dateFormat(tomorrow),
  });

  return res.status(201).json(vnpayResponse);
};

const checkPaymentVNPAY = async (req, res) => {
  console.log(req.query);
};

module.exports = {
  paymentVNPAY,
  checkPaymentVNPAY,
};

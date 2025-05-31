const { Products } = require("../models");
const { Op } = require("sequelize");
const axios = require("axios");
require("dotenv").config();

const searchProductsInDB = async (keyword, message) => {
  // Nếu message chứa "khoảng" và có số
  const khoangMatch = message.match(/khoảng\s*(\d+)/i);
  if (khoangMatch) {
    const price = parseInt(khoangMatch[1]);
    return await Products.findAll({
      where: {
        price: {
          [Op.between]: [price - 200000, price + 200000],
        },
      },
      limit: 10,
    });
  }
  return await Products.findAll({
    where: {
      [Op.or]: [
        { name: { [Op.like]: `%${keyword}%` } },
        { description: { [Op.like]: `%${keyword}%` } },
        { price: { [Op.like]: `%${keyword}%` } }, // nếu người dùng nhập số, có thể là giá
      ],
    },
    limit: 10,
  });
};

const isProductSearch = (message) => {
  const searchKeywords = [
    "tìm",
    "search",
    "sản phẩm",
    "product",
    "mua",
    "buy",
    "giá",
    "có",
    "vnd",
    "khoảng",
  ];
  return searchKeywords.some((keyword) =>
    message.toLowerCase().includes(keyword)
  );
};

const extractSearchTerm = (message) => {
  const keywords = [
    "tìm",
    "search",
    "sản phẩm",
    "product",
    "mua",
    "buy",
    "giá",
    "có",
    "vnd",
    "khoảng",
  ];
  let searchTerm = message.toLowerCase();
  keywords.forEach((keyword) => {
    searchTerm = searchTerm.replace(keyword, "").trim(); // bỏ keyword để lấy phần còn lại
  });
  return searchTerm;
};

const handlechat = async (req, res) => {
  const { message } = req.body; // nhận input từ FE

  try {
    if (isProductSearch(message)) {
      const keyword = extractSearchTerm(message);
      const products = await searchProductsInDB(keyword, message); // Gọi DB bằng Sequelize

      if (products.length > 0) {
        return res.json({ type: "products", data: products }); // Gửi về cho FE để render product cards
      }

      if (products.length === 0) {
        return res.json({
          type: "text",
          data: `Không tìm thấy sản phẩm nào với yêu cầu của bạn`,
        });
      }
    }

    // Nếu không tìm được sản phẩm → gọi Gemini
    const geminiResponse = await axios.post(
      `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${process.env.CHATBOT_API_KEY}`,
      {
        contents: [{ parts: [{ text: message }] }],
      },
      { headers: { "Content-Type": "application/json" } }
    );

    const reply =
      geminiResponse.data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ||
      "Không có phản hồi.";
    return res.json({ type: "text", data: reply }); // Gửi về cho FE đoạn văn bản
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ type: "error", data: "Lỗi khi xử lý yêu cầu." });
  }
};

module.exports = {
  handlechat,
};

const express = require("express");
const {
  createPromotions,
  getAllPromotions,
  getDetailPromotions,
  updatePromotions,
  deletePromotions,
  getDetailPromotionsByCode,
} = require("../controllers/promotions.controllers");

const promotionsRouter = express.Router();

promotionsRouter.post("/", createPromotions);
promotionsRouter.get("/", getAllPromotions);
promotionsRouter.get("/:id", getDetailPromotions);
promotionsRouter.put("/:id", updatePromotions);
promotionsRouter.delete("/:id", deletePromotions);
promotionsRouter.get("/code/:code", getDetailPromotionsByCode);

module.exports = {
  promotionsRouter,
};

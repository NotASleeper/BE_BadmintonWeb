const express = require("express");
const {
  createPromotions,
  getAllPromotions,
  getDetailPromotions,
  updatePromotions,
  deletePromotions,
} = require("../controllers/promotions.controllers");

const promotionsRouter = express.Router();

promotionsRouter.post("/", createPromotions);
promotionsRouter.get("/", getAllPromotions);
promotionsRouter.get("/:id", getDetailPromotions);
promotionsRouter.put("/:id", updatePromotions);
promotionsRouter.delete("/:id", deletePromotions);

module.exports = {
  promotionsRouter,
};

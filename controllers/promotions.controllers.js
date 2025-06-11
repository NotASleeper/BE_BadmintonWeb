const { Promotions } = require("../models");

const createPromotions = async (req, res) => {
  try {
    const { code, description, quantity, value, start, end, status } = req.body;
    const newPromotion = await Promotions.create({
      code,
      description,
      quantity,
      value,
      start,
      end,
      status,
    });
    res.status(201).send(newPromotion);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAllPromotions = async (req, res) => {
  try {
    const promotionsList = await Promotions.findAll();
    res.status(200).send(promotionsList);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getDetailPromotions = async (req, res) => {
  const { id } = req.params;
  try {
    const detailPromotion = await Promotions.findOne({
      where: { id },
    });
    res.status(200).send(detailPromotion);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getDetailPromotionsByCode = async (req, res) => {
  const { code } = req.params;
  try {
    const detailPromotion = await Promotions.findOne({
      where: { code },
    });
    if (!detailPromotion) {
      return res.status(404).send("Promotion not found");
    }
    res.status(200).send(detailPromotion);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updatePromotions = async (req, res) => {
  const { id } = req.params;
  const { code, description, quantity, value, start, end, status } = req.body;
  try {
    const detailPromotion = await Promotions.findOne({
      where: { id },
    });
    detailPromotion.code = code;
    detailPromotion.description = description;
    detailPromotion.quantity = quantity;
    detailPromotion.value = value;
    detailPromotion.start = start;
    detailPromotion.end = end;
    detailPromotion.status = status;
    await detailPromotion.save();
    res.status(200).send(detailPromotion);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deletePromotions = async (req, res) => {
  const { id } = req.params;
  try {
    const detailPromotion = await Promotions.findOne({
      where: { id },
    });
    await detailPromotion.destroy();
    res.status(200).send("Promotion deleted successfully");
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createPromotions,
  getAllPromotions,
  getDetailPromotions,
  updatePromotions,
  deletePromotions,
  getDetailPromotionsByCode,
};

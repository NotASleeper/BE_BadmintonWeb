const { Carts } = require("../models");

const createCarts = async (req, res) => {
  try {
    const { userid, productid, quantity, notes } = req.body;
    const newCart = await Carts.create({
      userid,
      productid,
      quantity,
      notes,
    });
    res.status(201).send(newCart);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAllCarts = async (req, res) => {
  try {
    const cartsList = await Carts.findAll();
    res.status(200).send(cartsList);
  } catch (error) {
    res.status;
  }
};

const getDetailCarts = async (req, res) => {
  const { id } = req.params;
  try {
    const detailCarts = await Carts.findOne({
      where: { id },
    });
    res.status(200).send(detailCarts);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateCarts = async (req, res) => {
  const { id } = req.params;
  const { userid, productid, quantity, notes } = req.body;
  try {
    const detailCarts = await Carts.findOne({
      where: { id },
    });
    detailCarts.userid = userid;
    detailCarts.productid = productid;
    detailCarts.quantity = quantity;
    detailCarts.notes = notes;
    await detailCarts.save();
    res.status(200).send(detailCarts);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteCarts = async (req, res) => {
  const { id } = req.params;
  try {
    const detailCarts = await Carts.findOne({
      where: { id },
    });
    await detailCarts.destroy();
    res.status(200).send("Cart deleted successfully");
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createCarts,
  getAllCarts,
  getDetailCarts,
  updateCarts,
  deleteCarts,
};

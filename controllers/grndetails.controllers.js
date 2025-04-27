const { GRNdetails } = require("../models");

const createGRNDetails = async (req, res) => {
  try {
    const { grnid, productid, price, quantity } = req.body;
    const newGRNDetails = await GRNdetails.create({
      grnid,
      productid,
      price,
      quantity,
    });
    res.status(201).json(newGRNDetails);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getlistGRNDetails = async (req, res) => {
  const { grnid } = req.params;
  try {
    const grnDetails = await GRNdetails.findAll({
      where: { grnid: grnid },
    });
    res.status(200).send(grnDetails);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getGRNDetailsById = async (req, res) => {
  const { id, grnid } = req.params;
  try {
    const detailGRNDetails = await GRNdetails.findOne({
      where: {
        id: id,
        grnid: grnid,
      },
    });
    res.status(200).send(detailGRNDetails);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateGRNDetails = async (req, res) => {
  const { id, grnid } = req.params;
  const { productid, price, quantity } = req.body;
  try {
    const detailGRNDetails = await GRNdetails.findOne({
      where: {
        id: id,
        grnid: grnid,
      },
    });
    detailGRNDetails.productid = productid;
    detailGRNDetails.price = price;
    detailGRNDetails.quantity = quantity;
    await detailGRNDetails.save();
    res.status(200).send(detailGRNDetails);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteGRNDetails = async (req, res) => {
  const { id, grnid } = req.params;
  try {
    const detailGRNDetails = await GRNdetails.destroy({
      where: {
        id: id,
        grnid: grnid,
      },
    });
    res.status(200).send("Deleted successfully");
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createGRNDetails,
  getlistGRNDetails,
  getGRNDetailsById,
  updateGRNDetails,
  deleteGRNDetails,
};

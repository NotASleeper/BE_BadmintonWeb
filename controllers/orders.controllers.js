const { Orders, Users, Promotions } = require("../models");

const createOrder = async (req, res) => {
  try {
    const { userid, totalprice, phonenumber, address, promotionid, status } =
      req.body;
    const newOrder = await Orders.create({
      userid,
      totalprice,
      phonenumber,
      address,
      promotionid,
      status,
    });
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await Orders.findAll({
      include: [
        {
          model: Users,
          attributes: ["name", "phonenumber"],
        },
        {
          model: Promotions,
          attributes: ["code"],
        },
      ],
    });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getOrderById = async (req, res) => {
  const { id } = req.params;
  try {
    const detailOrder = await Orders.findOne({
      where: { id },
    });
    res.status(200).send(detailOrder);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateOrder = async (req, res) => {
  const { id } = req.params;
  const { userid, totalprice, phonenumber, address, promotionid, status } =
    req.body;
  try {
    const detailOrder = await Orders.findOne({
      where: { id },
    });
    detailOrder.userid = userid;
    detailOrder.totalprice = totalprice;
    detailOrder.phonenumber = phonenumber;
    detailOrder.address = address;
    detailOrder.promotionid = promotionid;
    detailOrder.status = status;
    await detailOrder.save();
    res.status(200).send(detailOrder);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const detailOrder = await Orders.findOne({
      where: { id },
    });
    await detailOrder.destroy();
    res.status(200).send("Deleted successfully");
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
};

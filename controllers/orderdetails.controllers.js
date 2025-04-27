const { Ordersdetail } = require("../models");

const createOrderDetail = async (req, res) => {
  try {
    const { orderid, productid, quantity } = req.body;
    const newOrderDetail = await Ordersdetail.create({
      orderid,
      productid,
      quantity,
    });
    res.status(201).send(newOrderDetail);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAllOrderDetails = async (req, res) => {
  const { orderid } = req.params;
  try {
    const orderDetails = await Ordersdetail.findAll({
      where: { orderid: orderid },
    });
    res.status(200).send(orderDetails);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getOrderDetailById = async (req, res) => {
  const { id, orderid } = req.params;
  try {
    const orderDetail = await Ordersdetail.findOne({
      where: {
        id: id,
        orderid: orderid,
      },
    });
    res.status(200).send(orderDetail);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateOrderDetail = async (req, res) => {
  const { id, orderid } = req.params;
  const { productid, quantity } = req.body;
  try {
    const orderDetail = await Ordersdetail.findOne({
      where: {
        id: id,
        orderid: orderid,
      },
    });
    orderDetail.productid = productid;
    orderDetail.quantity = quantity;
    await orderDetail.save();
    res.status(200).send(orderDetail);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteOrderDetail = async (req, res) => {
  const { id, orderid } = req.params;
  try {
    const orderDetail = await Ordersdetail.findOne({
      where: {
        id: id,
        orderid: orderid,
      },
    });
    await orderDetail.destroy();
    res.status(200).send("Deleted successfully");
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createOrderDetail,
  getAllOrderDetails,
  getOrderDetailById,
  updateOrderDetail,
  deleteOrderDetail,
};

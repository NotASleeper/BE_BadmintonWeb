const { Reviews } = require("../models");

const createReviews = async (req, res) => {
  try {
    const { userid, rating, content, productid, orderid, prereviewid } =
      req.body;
    const newReview = await Reviews.create({
      userid,
      rating,
      content,
      productid,
      orderid,
      prereviewid,
    });
    res.status(201).send(newReview);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAllReviews = async (req, res) => {
  try {
    const reviewsList = await Reviews.findAll();
    res.status(200).send(reviewsList);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getDetailReviews = async (req, res) => {
  const { id } = req.params;
  try {
    const detailReviews = await Reviews.findOne({
      where: { id },
    });
    res.status(200).send(detailReviews);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateReviews = async (req, res) => {
  const { id } = req.params;
  const { userid, rating, content, productid, orderid, prereviewid } = req.body;
  try {
    const detailReviews = await Reviews.findOne({
      where: { id },
    });
    detailReviews.userid = userid;
    detailReviews.rating = rating;
    detailReviews.content = content;
    detailReviews.productid = productid;
    detailReviews.orderid = orderid;
    detailReviews.prereviewid = prereviewid;
    await detailReviews.save();
    res.status(200).send(detailReviews);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteReviews = async (req, res) => {
  const { id } = req.params;
  try {
    const detailReviews = await Reviews.findOne({
      where: { id },
    });
    await detailReviews.destroy();
    res.status(200).send("Review deleted successfully");
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createReviews,
  getAllReviews,
  getDetailReviews,
  updateReviews,
  deleteReviews,
};

const { Op } = require("sequelize");
const { Products, Imagesproduct, Categories } = require("../models");

const createProducts = async (req, res) => {
  try {
    const { name, categoriesid, description, price, brand, quantity } =
      req.body;
    const newProducts = await Products.create({
      name,
      categoriesid,
      description,
      price,
      brand,
      quantity,
    });
    res.status(201).send(newProducts);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAllProducts = async (req, res) => {
  const { name } = req.query;
  console.log(name);
  try {
    if (name) {
      const productslist = await Products.findAll({
        where: {
          name: {
            [Op.like]: `%${name}%`,
          },
        },
        include: {
          model: Categories,
          attributes: ["name"],
        },
        include: {
          model: Imagesproduct,
          attributes: ["url"],
        },
      });
      res.status(200).send(productslist);
    } else {
      const productslist = await Products.findAll();
      res.status(200).send(productslist);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const getDetailProducts = async (req, res) => {
  const { id } = req.params;
  try {
    const detailProducts = await Products.findOne({
      where: { id },
      include: [
        {
          model: Categories,
          attributes: ["name"],
        },
        {
          model: Imagesproduct,
          attributes: ["url"],
        },
      ],
    });
    res.status(200).send(detailProducts);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateProducts = async (req, res) => {
  const { id } = req.params;
  const { name, categoriesid, description, price, brand, quantity } = req.body;
  try {
    const detailProducts = await Products.findOne({
      where: { id },
    });
    detailProducts.name = name;
    detailProducts.categoriesid = categoriesid;
    detailProducts.description = description;
    detailProducts.price = price;
    detailProducts.brand = brand;
    detailProducts.quantity = quantity;
    await detailProducts.save();
    res.status(200).send(detailProducts);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteProducts = async (req, res) => {
  const { id } = req.params;
  try {
    await Products.destroy({
      where: { id },
    });
    await Imagesproduct.destroy({
      where: { productid: id },
    });
    res.status(200).send("Deleted successfully");
  } catch (error) {
    res.status(500).send(error);
  }
};
module.exports = {
  createProducts,
  getAllProducts,
  getDetailProducts,
  updateProducts,
  deleteProducts,
};

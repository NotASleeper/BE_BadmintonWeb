"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Imagesproduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Products }) {
      // define association here
      this.belongsTo(Products, { foreignKey: "productid" });
    }
  }
  Imagesproduct.init(
    {
      productid: DataTypes.INTEGER,
      url: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Imagesproduct",
    }
  );
  return Imagesproduct;
};

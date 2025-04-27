"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Reviews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Reviews.init(
    {
      userid: DataTypes.INTEGER,
      rating: DataTypes.INTEGER,
      content: DataTypes.TEXT,
      productid: DataTypes.INTEGER,
      orderid: DataTypes.INTEGER,
      prereviewid: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Reviews",
    }
  );
  return Reviews;
};

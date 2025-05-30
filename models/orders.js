"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Users, Ordersdetail, Promotions, Payment }) {
      // define association here
      this.belongsTo(Users, {
        foreignKey: "userid",
      });
      this.hasMany(Ordersdetail, {
        foreignKey: "orderid",
      });
      this.belongsTo(Promotions, {
        foreignKey: "promotionid",
      });
      this.hasOne(Payment, {
        foreignKey: "orderid",
      });
    }
  }
  Orders.init(
    {
      userid: DataTypes.INTEGER,
      totalprice: DataTypes.INTEGER,
      phonenumber: DataTypes.STRING,
      address: DataTypes.STRING,
      promotionid: DataTypes.INTEGER,
      status: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Orders",
    }
  );
  return Orders;
};

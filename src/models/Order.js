const Sequelize = require("sequelize");
const sequelize = require("../database/sequelize");

const Order = sequelize.define(
  "order",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    status_id: {
      type: Sequelize.INTEGER,
      references: { model: "status", key: "id" },
    },
    posy_id: {
      type: Sequelize.INTEGER,
      references: { model: "posy", key: "id" },
    },
    package_id: {
      type: Sequelize.INTEGER,
      references: { model: "package", key: "id" },
    },
    total_price: {
      type: Sequelize.NUMERIC,
      allowNull: false,
    },
  },
  {
    tableName: "order",
  }
);

module.exports = Order;

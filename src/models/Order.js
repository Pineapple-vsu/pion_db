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
    order_data: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    status_id: {
      type: Sequelize.INTEGER,
      references: { model: "status", key: "id" },
    },
    posy_id: {
      type: Sequelize.INTEGER,
      references: { model: "posy", key: "id" },
    },
    telephone: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    name_people: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    delivery: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "order",
  }
);

module.exports = Order;

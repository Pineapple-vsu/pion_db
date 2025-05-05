const Sequelize = require("sequelize");
const sequelize = require("../database/sequelize");

const Flower = sequelize.define(
  "flower",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    flower_type_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "flower_type",
        key: "id",
      },
    },
    img: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    cost: {
      type: Sequelize.DECIMAL, //money
      allowNull: false,
    },
    is_week: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    stock_count: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: "flower",
  }
);

module.exports = Flower;

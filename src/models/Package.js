const Sequelize = require("sequelize");
const sequelize = require("../database/sequelize");

const Package = sequelize.define(
  "package",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    cost: {
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
    stock_count: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "paskage",
  }
);

module.exports = Package;

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
    material: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "paskage",
  }
);

module.exports = Package;

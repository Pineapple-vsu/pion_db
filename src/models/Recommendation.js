const Sequelize = require("sequelize");
const sequelize = require("../database/sequelize");

const Recommendation = sequelize.define(
  "recommendation",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "recommendation",
  }
);

module.exports = Recommendation;

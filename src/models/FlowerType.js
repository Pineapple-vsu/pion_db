const Sequelize = require("sequelize");
const sequelize = require("../database/sequelize");

const FlowerType = sequelize.define(
  "flower_type",
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
    recommendation_id: {
      type: Sequelize.INTEGER,
      references: {
        model: "recommendation",
        key: "id",
      },
    },
  },
  {
    tableName: "flower_type",
  }
);

module.exports = FlowerType;

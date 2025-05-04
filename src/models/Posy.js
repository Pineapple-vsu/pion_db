const Sequelize = require("sequelize");
const sequelize = require("../database/sequelize");

const Posy = sequelize.define(
  "posy",
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
    flower_id: {
      type: Sequelize.INTEGER,
      references: { model: "flower", key: "id" },
    },
    price: {
      type: Sequelize.NUMERIC,
      allowNull: false,
    },
  },
  {
    tableName: "posy",
  }
);

module.exports = Posy;

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
    flower_id: {
      type: Sequelize.INTEGER,
      references: { model: "flower", key: "id" },
    },
    //кол-во
    count: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    //стоимость
    cost: {
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
    package_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: "posy",
  }
);

module.exports = Posy;

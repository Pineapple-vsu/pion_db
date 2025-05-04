const Sequelize = require("sequelize");
const sequelize = require("../database/sequelize");

const Status = sequelize.define(
  "status",
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
  },
  {
    tableName: "status",
  }
);
module.exports = Status;

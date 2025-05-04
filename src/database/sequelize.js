const Sequelize = require("sequelize");
const config = require("../config/sequelize");

const sequelize = new Sequelize("pion_db", "postgres", "159753", config);

module.exports = sequelize;

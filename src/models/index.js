const sequelize = require("../database/sequelize");

const FlowerType = require("./FlowerType");
const Flower = require("./Flower");
const Posy = require("./Posy");
const Package = require("./Package");
const Status = require("./Status");
const Order = require("./Order");
const Recommendation = require("./Recommendation");

//links between the models
FlowerType.hasMany(Flower, { foreignKey: "flower_type_id" });
Flower.belongsTo(FlowerType, { foreignKey: "flower_type_id" });

Flower.hasMany(Posy, { foreignKey: "flower_id" });
Posy.belongsTo(Flower, { foreignKey: "flower_id" });

Package.hasMany(Order, { foreignKey: "package_id" });
Order.belongsTo(Package, { foreignKey: "package_id" });

Status.hasMany(Order, { foreignKey: "status_id" });
Order.belongsTo(Status, { foreignKey: "status_id" });

Posy.hasMany(Order, { foreignKey: "posy_id" });
Order.belongsTo(Posy, { foreignKey: "posy_id" });

Recommendation.belongsTo(FlowerType, { foreignKey: "flower_type_id" });
FlowerType.hasMany(Recommendation, { foreignKey: "flower_type_id" });

module.exports = {
  sequelize,
  FlowerType,
  Flower,
  Posy,
  Package,
  Status,
  Order,
  Recommendation,
};

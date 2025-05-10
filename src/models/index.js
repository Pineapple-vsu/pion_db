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

// Связь FlowerType ↔ Recommendation
FlowerType.belongsTo(Recommendation, { foreignKey: "recommendation_id" });
Recommendation.hasMany(FlowerType, { foreignKey: "recommendation_id" });

Package.hasMany(Posy, { foreignKey: "package_id" });
Posy.belongsTo(Package, { foreignKey: "package_id" });

Status.hasMany(Order, { foreignKey: "status_id" });
Order.belongsTo(Status, { foreignKey: "status_id" });

Posy.hasMany(Order, { foreignKey: "posy_id" });
Order.belongsTo(Posy, { foreignKey: "posy_id" });

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

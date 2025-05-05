const { Op } = require("sequelize");
const { Flower, FlowerType } = require("../models");

class FlowerRepository {
  async create(flower) {
    return await Flower.create(flower);
  }

  async read(id) {
    return await Flower.findByPk(id);
  }

  async update(id, flower) {
    await Flower.update(flower, { where: { id } });
    // return await Flower.findByPk(id); // Возвращаем обновлённый цветок
  }

  async delete(id) {
    await Flower.destroy({ where: { id } });
  }

  async list() {
    return await Flower.findAll();
  }

  async findWeeklyFlowers() {
    return await Flower.findAll({
      where: {
        is_week: true,
      },
    });
  }

  async findByFlowerType(flowerTypeId) {
    return await Flower.findAll({
      where: {
        flower_type_id: flowerTypeId,
      },
      order: [["name", "ASC"]],
    });
  }

  async findByStockCount(minStock) {
    return await Flower.findAll({
      where: {
        stock_count: {
          [Op.gte]: minStock,
        },
      },
      order: [["stock_count", "DESC"]],
    });
  }

  async findByName(flowerName) {
    return await Flower.findAll({
      where: {
        name: {
          [Op.iLike]: `%${flowerName}%`, // без учёта регистра
        },
      },
    });
  }

  async getFlowerTypeNameById(flowerId) {
    return await Flower.findOne({
      where: { id: flowerId },
      include: [{ model: FlowerType, attributes: ["name"] }],
    });
  }
  async getFlowersByTypeName(name) {
    return await Flower.findAll({
      include: [
        {
          model: FlowerType,
          where: { name: name },
        },
      ],
    });
  }
}

module.exports = new FlowerRepository();

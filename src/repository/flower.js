const { Op } = require("sequelize");
const Flower = require("../models/Flower");

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
          [Op.gt]: minStock,
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
}

module.exports = new FlowerRepository();

const { Op } = require("sequelize");
const FlowerType = require("../models/FlowerType");

class FlowerTypeRepository {
  async create(flowerType) {
    return await FlowerType.create(flowerType);
  }

  async read(id) {
    return await FlowerType.findByPk(id);
  }

  async update(id, flowerType) {
    await FlowerType.update(flowerType, { where: { id } });
    return await FlowerType.findByPk(id);
  }

  async delete(id) {
    await FlowerType.destroy({ where: { id } });
  }

  async list() {
    return await FlowerType.findAll();
  }

  //   async findByName(name) {
  //     return await FlowerType.findAll({
  //       where: {
  //         name: { [Op.like]: `%${name}%` },
  //       },
  //     });
  //   }
}

module.exports = new FlowerTypeRepository();

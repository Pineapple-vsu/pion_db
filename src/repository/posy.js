const { Op } = require("sequelize");
const Posy = require("../models/Posy");

class PosyRepository {
  async create(posy) {
    return await Posy.create(posy);
  }

  async read(id) {
    return await Posy.findByPk(id);
  }

  async update(id, posy) {
    await Posy.update(posy, { where: { id } });
    // return await Posy.findByPk(id); // Возвращаем обновлённый букет
  }

  async delete(id) {
    await Posy.destroy({ where: { id } });
  }

  async list() {
    return await Posy.findAll();
  }

  //   async findByName(name) {
  //     return await Posy.findAll({
  //       where: {
  //         name: { [Op.like]: `%${name}%` },
  //       },
  //     });
  //   }
}

module.exports = new PosyRepository();

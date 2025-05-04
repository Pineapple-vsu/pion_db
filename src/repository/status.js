const { Op } = require("sequelize");
const Status = require("../models/Status");

class StatusRepository {
  async create(status) {
    return await Status.create(status);
  }

  async read(id) {
    return await Status.findByPk(id);
  }

  async update(id, status) {
    await Status.update(status, { where: { id } });
    return await Status.findByPk(id);
  }

  async delete(id) {
    await Status.destroy({ where: { id } });
  }

  async list() {
    return await Status.findAll();
  }

  //   async findByName(name) {
  //     return await Status.findAll({
  //       where: {
  //         name: { [Op.like]: `%${name}%` },
  //       },
  //     });
  //   }
}

module.exports = new StatusRepository();

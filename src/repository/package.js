const { Op } = require("sequelize");
const Package = require("../models/Package");

class PackageRepository {
  async create(packageData) {
    return await Package.create(packageData);
  }

  async read(id) {
    return await Package.findByPk(id);
  }

  async update(id, packageData) {
    await Package.update(packageData, { where: { id } });
    return await Package.findByPk(id);
  }

  async delete(id) {
    await Package.destroy({ where: { id } });
  }

  async list() {
    return await Package.findAll();
  }

  //   async findByMaterial(material) {
  //     return await Package.findAll({
  //       where: {
  //         material: { [Op.like]: `%${material}%` },
  //       },
  //     });
  //   }
}

module.exports = new PackageRepository();

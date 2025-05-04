const FlowerTypeRepository = require("../repository/flower_type");

class FlowerTypeService {
  async createFlowerType(flowerType) {
    return await FlowerTypeRepository.create(flowerType);
  }

  async getFlowerTypeById(id) {
    return await FlowerTypeRepository.read(id);
  }

  async updateFlowerType(id, flowerType) {
    await FlowerTypeRepository.update(id, flowerType);
    return await FlowerTypeRepository.read(id);
  }

  async deleteFlowerType(id) {
    await FlowerTypeRepository.delete(id);
  }

  async getAllFlowerTypes() {
    return await FlowerTypeRepository.list();
  }

  //   async getFlowerTypeByName(name) {
  //     const flowerTypes = await FlowerTypeRepository.findByName(name);
  //     if (flowerTypes.length === 0) {
  //       throw new Error("No flower types found");
  //     }
  //     return flowerTypes;
  //   }
}

module.exports = new FlowerTypeService();

const FlowerRepository = require("../repository/flower");

class FlowerService {
  async createFlower(flower) {
    return await FlowerRepository.create(flower);
  }

  async getFlowerById(id) {
    return await FlowerRepository.read(id);
  }

  async updateFlower(id, flower) {
    await FlowerRepository.update(id, flower);
    return await FlowerRepository.read(id);
  }

  async deleteFlower(id) {
    await FlowerRepository.delete(id);
  }
  async getAllFlowers() {
    return await FlowerRepository.list();
  }

  async findByFlowerType(flowerTypeId) {
    return await FlowerRepository.findByFlowerType(flowerTypeId);
  }
  async getWeeklyFlowers() {
    return await FlowerRepository.findWeeklyFlowers();
  }

  async findByStockCount(minStock) {
    return await FlowerRepository.findByStockCount(minStock);
  }

  async findByName(name) {
    return await FlowerRepository.findByName(name);
  }
}

module.exports = new FlowerService();

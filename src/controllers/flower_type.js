const flowerTypeService = require("../services/flower_type");

class FlowerTypeController {
  async createFlowerType(req, res) {
    try {
      const flowerType = await flowerTypeService.createFlowerType(req.body);
      res.status(201).json(flowerType);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getFlowerTypeById(req, res) {
    try {
      const flowerType = await flowerTypeService.getFlowerTypeById(
        req.params.id
      );
      res.json(flowerType);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAllFlowerTypes(req, res) {
    try {
      const flowerTypes = await flowerTypeService.getAllFlowerTypes();
      res.json(flowerTypes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateFlowerType(req, res) {
    try {
      const flowerType = await flowerTypeService.updateFlowerType(
        req.params.id,
        req.body
      );
      res.json(flowerType);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteFlowerType(req, res) {
    try {
      await flowerTypeService.deleteFlowerType(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new FlowerTypeController();

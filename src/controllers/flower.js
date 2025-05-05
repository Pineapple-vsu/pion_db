const flowerService = require("../services/flower");

class FlowerController {
  async createFlower(req, res) {
    try {
      const flower = await flowerService.createFlower(req.body);
      res.status(201).json(flower);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  //   async createFlower(req, res) {
  //     try {
  //       const { id, ...flowerData } = req.body;
  //       const flower = await flowerService.createFlower(flowerData);
  //       res.status(201).json(flower);
  //     } catch (error) {
  //       res.status(500).json({ error: error.message });
  //     }
  //   }

  async getFlowerById(req, res) {
    try {
      const flower = await flowerService.getFlowerById(req.params.id);
      flower.img = `http://localhost:3000/${flower.img}`;
      res.json(flower);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAllFlowers(req, res) {
    try {
      const flowers = await flowerService.getAllFlowers();
      const updatedFlowers = flowers.map((flower) => ({
        ...flower.dataValues,
        img: `http://localhost:3000/${flower.img}`,
      }));
      res.json(updatedFlowers);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateFlower(req, res) {
    try {
      const flower = await flowerService.updateFlower(req.params.id, req.body);
      res.json(flower);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteFlower(req, res) {
    try {
      await flowerService.deleteFlower(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getWeeklyFlowers(req, res) {
    try {
      const flowers = await flowerService.getWeeklyFlowers();
      const updatedFlowers = flowers.map((flower) => ({
        ...flower.dataValues,
        img: `http://localhost:3000/${flower.img}`,
      }));
      res.json(updatedFlowers);

      // res.json(flowers);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getFlowersByType(req, res) {
    try {
      const { typeId } = req.params;
      const flowers = await flowerService.findByFlowerType(typeId);

      const updatedFlowers = flowers.map((flower) => ({
        ...flower.dataValues,
        img: `http://localhost:3000/${flower.img}`,
      }));
      res.json(updatedFlowers);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getFlowersByStock(req, res) {
    try {
      const { minStock } = req.params;
      const flowers = await flowerService.findByStockCount(minStock);

      const updatedFlowers = flowers.map((flower) => ({
        ...flower.dataValues,
        img: `http://localhost:3000/${flower.img}`,
      }));
      res.json(updatedFlowers);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getFlowersByName(req, res) {
    try {
      const { name } = req.params;
      const flowers = await flowerService.findByName(name);

      const updatedFlowers = flowers.map((flower) => ({
        ...flower.dataValues,
        img: `http://localhost:3000/${flower.img}`,
      }));
      res.json(updatedFlowers);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  async getFlowerRecommendation(req, res) {
    try {
      const { name } = req.params;
      const flowers = await flowerService.findByName(name);

      const updatedFlowers = flowers.map((flower) => ({
        ...flower.dataValues,
        img: `http://localhost:3000/${flower.img}`,
      }));
      res.json(updatedFlowers);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  async getFlowerTypeName(req, res) {
    try {
      const typeName = await flowerService.getFlowerTypeName(req.params.id);
      if (!typeName)
        return res.status(404).json({ error: "Тип цветка не найден" });

      res.json({ type_name: typeName });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  async getFlowersByTypeName(req, res) {
    try {
      const flowers = await flowerService.getFlowersByTypeName(req.params.name);
      if (!flowers.length)
        return res.status(404).json({ error: "Цветы данного типа не найдены" });

      res.json(flowers);
    } catch (error) {
      console.error("Ошибка при поиске цветов по типу:", error);
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new FlowerController();

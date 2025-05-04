const posyService = require("../services/posy");

class PosyController {
  async createPosy(req, res) {
    try {
      const posy = await posyService.createPosy(req.body);
      res.status(201).json(posy);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getPosyById(req, res) {
    try {
      const posy = await posyService.getPosyById(req.params.id);
      res.json(posy);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAllPosies(req, res) {
    try {
      const posies = await posyService.getAllPosies();
      res.json(posies);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updatePosy(req, res) {
    try {
      const posy = await posyService.updatePosy(req.params.id, req.body);
      res.json(posy);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deletePosy(req, res) {
    try {
      await posyService.deletePosy(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new PosyController();

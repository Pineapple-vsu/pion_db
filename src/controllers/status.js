const statusService = require("../services/status");

class StatusController {
  async createStatus(req, res) {
    try {
      const status = await statusService.createStatus(req.body);
      res.status(201).json(status);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getStatusById(req, res) {
    try {
      const status = await statusService.getStatusById(req.params.id);
      res.json(status);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAllStatuses(req, res) {
    try {
      const statuses = await statusService.getAllStatuses();
      res.json(statuses);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateStatus(req, res) {
    try {
      const status = await statusService.updateStatus(req.params.id, req.body);
      res.json(status);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteStatus(req, res) {
    try {
      await statusService.deleteStatus(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new StatusController();

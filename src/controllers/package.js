const packageService = require("../services/package");

class PackageController {
  async createPackage(req, res) {
    try {
      const packageData = await packageService.createPackage(req.body);
      res.status(201).json(packageData);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getPackageById(req, res) {
    try {
      const packageData = await packageService.getPackageById(req.params.id);
      res.json(packageData);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAllPackages(req, res) {
    try {
      const packages = await packageService.getAllPackages();
      res.json(packages);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updatePackage(req, res) {
    try {
      const packageData = await packageService.updatePackage(
        req.params.id,
        req.body
      );
      res.json(packageData);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deletePackage(req, res) {
    try {
      await packageService.deletePackage(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new PackageController();

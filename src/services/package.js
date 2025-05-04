const PackageRepository = require("../repository/package");

class PackageService {
  async createPackage(packageData) {
    return await PackageRepository.create(packageData);
  }

  async getPackageById(id) {
    return await PackageRepository.read(id);
  }

  async updatePackage(id, packageData) {
    await PackageRepository.update(id, packageData);
    return await PackageRepository.read(id);
  }

  async deletePackage(id) {
    await PackageRepository.delete(id);
  }
  async getAllPackages() {
    return await PackageRepository.list();
  }

  //   async getPackagesByMaterial(material) {
  //     const packages = await PackageRepository.findByMaterial(material);
  //     if (packages.length === 0) {
  //       throw new Error("No packages found with this material");
  //     }
  //     return packages;
  //   }
}

module.exports = new PackageService();

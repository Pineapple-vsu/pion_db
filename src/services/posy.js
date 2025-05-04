const PosyRepository = require("../repository/posy");

class PosyService {
  async createPosy(posy) {
    return await PosyRepository.create(posy);
  }

  async getPosyById(id) {
    return await PosyRepository.read(id);
  }

  async updatePosy(id, posy) {
    await PosyRepository.update(id, posy);
    return await PosyRepository.read(id);
  }

  async deletePosy(id) {
    await PosyRepository.delete(id);
  }

  async getAllPosies() {
    return await PosyRepository.list();
  }
  //   async getPosyByName(name) {
  //     const posies = await PosyRepository.findByName(name);
  //     if (posies.length === 0) {
  //       throw new Error("No posies found");
  //     }
  //     return posies;
  //   }
}

module.exports = new PosyService();

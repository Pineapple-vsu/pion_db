const StatusRepository = require("../repository/status");

class StatusService {
  async createStatus(status) {
    return await StatusRepository.create(status);
  }

  async getStatusById(id) {
    return await StatusRepository.read(id);
  }

  async updateStatus(id, status) {
    await StatusRepository.update(id, status);
    return await StatusRepository.read(id);
  }

  async deleteStatus(id) {
    await StatusRepository.delete(id);
  }
  async getAllStatuses() {
    return await StatusRepository.list();
  }
  //   async getStatusByName(name) {
  //     const statuses = await StatusRepository.findByName(name);
  //     if (statuses.length === 0) {
  //       throw new Error("No statuses found");
  //     }
  //     return statuses;
  //   }
}

module.exports = new StatusService();

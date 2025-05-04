const { Op } = require("sequelize");
const Recommendation = require("../models/Recommendation");

class RecommendationRepository {
  async create(recommendation) {
    return await Recommendation.create(recommendation);
  }

  async read(id) {
    return await Recommendation.findByPk(id);
  }

  async update(id, recommendation) {
    await Recommendation.update(recommendation, { where: { id } });
    return await Recommendation.findByPk(id);
  }

  async delete(id) {
    await Recommendation.destroy({ where: { id } });
  }

  async list() {
    return await Recommendation.findAll();
  }

  //   async findByDescription(description) {
  //     return await Recommendation.findAll({
  //       where: {
  //         description: { [Op.like]: `%${description}%` },
  //       },
  //     });
  //   }
}

module.exports = new RecommendationRepository();

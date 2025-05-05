const { Op } = require("sequelize");
const Recommendation = require("../models/Recommendation");
const Flower = require("../models/Flower");
const FlowerType = require("../models/FlowerType");

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

  async getByFlowerId(flowerId) {
    const flower = await Flower.findByPk(flowerId);
    if (!flower) return null;

    const flowerType = await FlowerType.findByPk(flower.flower_type_id);
    if (!flowerType) return null;

    return await Recommendation.findByPk(flowerType.recommendation_id);
  }
}

module.exports = new RecommendationRepository();

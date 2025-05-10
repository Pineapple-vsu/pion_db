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

  async getRecommendationDescriptionByFlowerId(flowerId) {
    const flower = await Flower.findByPk(flowerId);
    if (!flower) return null;

    // Получаем FlowerType через flower_type_id
    const flowerType = await FlowerType.findByPk(flower.flower_type_id);
    if (!flowerType) return null;

    // Получаем Recommendation через recommendation_id
    const recommendation = await Recommendation.findByPk(
      flowerType.recommendation_id
    );
    if (!recommendation) return null;

    return recommendation.description;
  }
}

module.exports = new RecommendationRepository();

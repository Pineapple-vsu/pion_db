const RecommendationRepository = require("../repository/recommendation");

class RecommendationService {
  async createRecommendation(recommendation) {
    return await RecommendationRepository.create(recommendation);
  }

  async getRecommendationById(id) {
    return await RecommendationRepository.read(id);
  }

  async updateRecommendation(id, recommendation) {
    await RecommendationRepository.update(id, recommendation);
    return await RecommendationRepository.read(id);
  }

  async deleteRecommendation(id) {
    await RecommendationRepository.delete(id);
  }

  async getAllRecommendations() {
    return await RecommendationRepository.list();
  }

  async getRecommendationDescriptionByFlowerId(flowerId) {
    return await RecommendationRepository.getRecommendationDescriptionByFlowerId(
      flowerId
    );
  }
}

module.exports = new RecommendationService();

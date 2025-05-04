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
  //   async getRecommendationsByDescription(description) {
  //     const recommendations = await RecommendationRepository.findByDescription(description);
  //     if (recommendations.length === 0) {
  //       throw new Error("No recommendations found");
  //     }
  //     return recommendations;
  //   }
}

module.exports = new RecommendationService();

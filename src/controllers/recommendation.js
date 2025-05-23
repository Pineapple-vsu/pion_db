const recommendationService = require("../services/recommendation");

class RecommendationController {
  async createRecommendation(req, res) {
    try {
      const recommendation = await recommendationService.createRecommendation(
        req.body
      );
      res.status(201).json(recommendation);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getRecommendationById(req, res) {
    try {
      const recommendation = await recommendationService.getRecommendationById(
        req.params.id
      );
      res.json(recommendation);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAllRecommendations(req, res) {
    try {
      const recommendations =
        await recommendationService.getAllRecommendations();
      res.json(recommendations);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateRecommendation(req, res) {
    try {
      const recommendation = await recommendationService.updateRecommendation(
        req.params.id,
        req.body
      );
      res.json(recommendation);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteRecommendation(req, res) {
    try {
      await recommendationService.deleteRecommendation(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  async getRecommendationDescriptionByFlowerId(req, res) {
    try {
      const description =
        await recommendationService.getRecommendationDescriptionByFlowerId(
          req.params.id
        );
      if (!description)
        return res.status(404).json({ error: "Рекомендация не найдена" });

      res.json({ description });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new RecommendationController();

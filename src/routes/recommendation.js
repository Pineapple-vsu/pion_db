const express = require("express");
const router = express.Router();
const RecommendationController = require("../controllers/recommendation");

router.post("/", RecommendationController.createRecommendation);
router.get("/", RecommendationController.getAllRecommendations);
router.get("/:id", RecommendationController.getRecommendationById);
router.put("/:id", RecommendationController.updateRecommendation);
router.delete("/:id", RecommendationController.deleteRecommendation);

router.get(
  "/flower/:id",
  RecommendationController.getRecommendationDescriptionByFlowerId
);

module.exports = router;

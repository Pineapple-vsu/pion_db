const express = require("express");
const router = express.Router();
const FlowerController = require("../controllers/flower");

router.post("/", FlowerController.createFlower);
router.get("/", FlowerController.getAllFlowers);
router.get("/weekly", FlowerController.getWeeklyFlowers);
router.get("/:id", FlowerController.getFlowerById);
router.put("/:id", FlowerController.updateFlower);
router.delete("/:id", FlowerController.deleteFlower);
router.get("/type/:typeId", FlowerController.getFlowersByType);

router.get("/search/:name", FlowerController.getFlowersByName);

router.get("/stock/:minStock", FlowerController.getFlowersByStock);

module.exports = router;

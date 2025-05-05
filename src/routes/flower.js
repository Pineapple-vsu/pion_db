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

router.get("/:id/type_name", FlowerController.getFlowerTypeName);

router.get("/type_name/:name", FlowerController.getFlowersByTypeName);

module.exports = router;

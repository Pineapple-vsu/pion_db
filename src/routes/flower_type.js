const express = require("express");
const router = express.Router();
const FlowerTypeController = require("../controllers/flower_type");

router.post("/", FlowerTypeController.createFlowerType);
router.get("/", FlowerTypeController.getAllFlowerTypes);
router.get("/:id", FlowerTypeController.getFlowerTypeById);
router.put("/:id", FlowerTypeController.updateFlowerType);
router.delete("/:id", FlowerTypeController.deleteFlowerType);

module.exports = router;

const express = require("express");
const router = express.Router();
const PosyController = require("../controllers/posy");

router.post("/", PosyController.createPosy);
router.get("/", PosyController.getAllPosies);
router.get("/:id", PosyController.getPosyById);
router.put("/:id", PosyController.updatePosy);
router.delete("/:id", PosyController.deletePosy);

module.exports = router;

const express = require("express");
const router = express.Router();
const StatusController = require("../controllers/status");

router.post("/", StatusController.createStatus);
router.get("/", StatusController.getAllStatuses);
router.get("/:id", StatusController.getStatusById);
router.put("/:id", StatusController.updateStatus);
router.delete("/:id", StatusController.deleteStatus);

module.exports = router;

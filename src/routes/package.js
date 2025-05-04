const express = require("express");
const router = express.Router();
const PackageController = require("../controllers/package");

router.post("/", PackageController.createPackage);
router.get("/", PackageController.getAllPackages);
router.get("/:id", PackageController.getPackageById);
router.put("/:id", PackageController.updatePackage);
router.delete("/:id", PackageController.deletePackage);

module.exports = router;

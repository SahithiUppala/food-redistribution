const express = require("express");
const router = express.Router();
const trackingController = require("../controllers/trackingController");

// Update current location
router.post("/update", trackingController.updateLocation);

// Get latest location
router.get("/:id", trackingController.getLocation);

// Get full location history
router.get("/history/:id", trackingController.getHistory);

module.exports = router;

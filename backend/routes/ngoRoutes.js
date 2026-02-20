const router = require("express").Router();
const ctrl = require("../controllers/ngoController");

/* 📦 GET AVAILABLE DONATIONS */
router.get("/available", ctrl.getAvailablePickups);

/* ✅ NGO RESPONDS TO DONATION */
router.post("/respond", ctrl.acceptPickup);

/* 👤 ASSIGN VOLUNTEER */
router.post("/assign", ctrl.updateTracking);

module.exports = router;

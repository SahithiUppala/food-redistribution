const router = require("express").Router();
const ctrl = require("../controllers/donationController");

router.post("/donate", ctrl.createDonation);
router.get("/history/:donorId", ctrl.getDonationHistory);
router.get("/active/:donorId", ctrl.getActivePickup);
router.get("/impact/:donorId", ctrl.getImpact);

module.exports = router;

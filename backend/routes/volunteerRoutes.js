const router = require("express").Router();
const ctrl = require("../controllers/volunteerController");


/* =====================================================
   📦 GET ASSIGNED PICKUPS
   GET /volunteer/pickups
===================================================== */

router.get(
  "/pickups",
  ctrl.getAssignedPickups
);


/* =====================================================
   ✅ ACCEPT PICKUP
   POST /volunteer/accept
===================================================== */

router.post(
  "/accept",
  ctrl.acceptPickup
);


/* =====================================================
   📍 UPDATE TRACKING
   POST /volunteer/tracking
===================================================== */

router.post(
  "/tracking",
  ctrl.updateTracking
);


module.exports = router;

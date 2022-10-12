const express = require("express");
const router = express.Router();

const GUESTController = require("../controller/GUESTController");
const visitController = require("../controller/visitController");

const verifyAuthentication =
  require("../../common/helper").verifyAuthentication;

router.post("/edit-visit", verifyAuthentication, visitController.editVisit);
router.post("/add-visit", verifyAuthentication, visitController.addVisit);

router.post("/visit-by-token", visitController.visitByToken);
router.get("/visit-by-id/:id", verifyAuthentication, visitController.visitById);
router.get(
  "/visit-by-registration-code",
  verifyAuthentication,
  visitController.visitByregistrationCode
);

router.get(
  "/upcoming-visits",
  verifyAuthentication,
  visitController.upcomingVisits
);

router.get("/visits-today", verifyAuthentication, visitController.visitsToday);
router.get("/visit-report", verifyAuthentication, visitController.visitReport);
router.get("/csv-report", verifyAuthentication, visitController.csvReport);

router.get(
  "/calendar-events",
  verifyAuthentication,
  visitController.calendarEvents
);
router.get(
  "/roll-call-list",
  verifyAuthentication,
  visitController.rollCallList
);

//visit actions
router.post("/bolo-passed", verifyAuthentication, GUESTController.boloPassed);
router.post("/bolo-failed", verifyAuthentication, GUESTController.boloFailed);
router.post("/notify-host", verifyAuthentication, GUESTController.notifyHost);
router.post("/confirm-visit", GUESTController.confirmVisit);
router.post("/deny-visit", GUESTController.denyVisit);

router.post(
  "/self-register",
  verifyAuthentication,
  GUESTController.selfRegister
);
router.post(
  "/check-in-GUEST",
  verifyAuthentication,
  GUESTController.checkInGUEST
);
router.post(
  "/check-out-GUEST",
  verifyAuthentication,
  GUESTController.checkOutGUEST
);
router.post(
  "/collect-GUEST",
  verifyAuthentication,
  GUESTController.collectVisit
);
router.post("/remove-visit", verifyAuthentication, GUESTController.removeVisit);

module.exports = router;

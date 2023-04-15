const express = require("express");
const {
  ajouterAlerte,
  getAlertes,
  getAlerte,
  updateAlerte,
  deleteAlerte,
} = require("../controllers/alerte");
const router = express.Router();

router.route("/alertes").post(ajouterAlerte);
router.route("/alertes").get(getAlertes);
router.route("/alertes/:id").get(getAlerte);
router.route("/alertes/:id").put(updateAlerte);
router.route("/alertes/:id").delete(deleteAlerte);

module.exports = router;

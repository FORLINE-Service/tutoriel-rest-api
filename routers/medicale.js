const express = require("express");
const {
  ajouterMedicale,
  getMedicales,
  getMedicale,
  updateMedicale,
  deleteMedicale,
} = require("../controllers/medicale");
const router = express.Router();

router.route("/medicales").post(ajouterMedicale);
router.route("/medicales").get(getMedicales);
router.route("/medicales/:id").get(getMedicale);
router.route("/medicales/:id").put(updateMedicale);
router.route("/medicales/:id").delete(deleteMedicale);

module.exports = router;

const express = require("express");
const {
  ajouterPsychologique,
  getPsychologiques,
  getPsychologique,
  updatePsychologique,
  deletePsychologique,
} = require("../controllers/psychologique");
const router = express.Router();

router.route("/psychologiques").post(ajouterPsychologique);
router.route("/psychologiques").get(getPsychologiques);
router.route("/psychologiques/:id").get(getPsychologique);
router.route("/psychologiques/:id").put(updatePsychologique);
router.route("/psychologiques/:id").delete(deletePsychologique);

module.exports = router;

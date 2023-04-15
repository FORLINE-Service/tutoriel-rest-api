const express = require("express");
const {
  ajouterJuridique,
  getJuridiques,
  getJuridique,
  updateJuridique,
  deleteJuridique,
} = require("../controllers/juridique");
const router = express.Router();

router.route("/juridiques").post(ajouterJuridique);
router.route("/juridiques").get(getJuridiques);
router.route("/juridiques/:id").get(getJuridique);
router.route("/juridiques/:id").put(updateJuridique);
router.route("/juridiques/:id").delete(deleteJuridique);

module.exports = router;

const express = require("express");
const {
  ajouterSugestion,
  getSugestions,
  getSugestion,
  updateSugestion,
  deleteSugestion,
} = require("../controllers/sugestion");
const router = express.Router();

router.route("/sugestions").post(ajouterSugestion);
router.route("/sugestions").get(getSugestions);
router.route("/sugestions/:id").get(getSugestion);
router.route("/sugestions/:id").put(updateSugestion);
router.route("/sugestions/:id").delete(deleteSugestion);

module.exports = router;

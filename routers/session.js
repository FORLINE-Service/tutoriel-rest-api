const express = require("express");
const {
  ajouterSession,
  getSessions,
  getSession,
  updateSession,
  deleteSession,
} = require("../controllers/session");
const router = express.Router();

router.route("/sessions").post(ajouterSession);
router.route("/sessions").get(getSessions);
router.route("/sessions/:id").get(getSession);
router.route("/sessions/:id").put(updateSession);
router.route("/sessions/:id").delete(deleteSession);

module.exports = router;

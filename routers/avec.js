const express = require("express");
const {
  ajouterAvec,
  getAvecs,
  getAvec,
  updateAvec,
  deleteAvec,
} = require("../controllers/avec");
const router = express.Router();

router.route("/avecs").post(ajouterAvec);
router.route("/avecs").get(getAvecs);
router.route("/avecs/:id").get(getAvec);
router.route("/avecs/:id").put(updateAvec);
router.route("/avecs/:id").delete(deleteAvec);

module.exports = router;

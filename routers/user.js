const express = require("express");
const {
  ajouterUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/user");
const router = express.Router();

router.route("/users").post(ajouterUser);
router.route("/users").get(getUsers);
router.route("/users/:id").get(getUser);
router.route("/users/:id").put(updateUser);
router.route("/users/:id").delete(deleteUser);

module.exports = router;

const express = require("express");
const { register, login } = require("../controllers/authControl");

express.urlencoded({ extended: true });
express.json();

const router = express.Router();

router.post("/", register);
router.post("/login", login);

module.exports = router;
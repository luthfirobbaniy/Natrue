const express = require("express");
const { login, keepLogin } = require("../controllers/authController");
const { checkToken } = require("../helpers/jwt");
const router = express.Router();

router.post("/login", login);
router.post("/keep-login", checkToken, keepLogin);

module.exports = router;

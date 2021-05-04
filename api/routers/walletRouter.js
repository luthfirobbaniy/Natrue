const express = require("express");
const { getWallet } = require("../controllers/walletController");
const router = express.Router();

router.get("/:accountId", getWallet);

module.exports = router;

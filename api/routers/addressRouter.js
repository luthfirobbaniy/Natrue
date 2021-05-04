const express = require("express");
const { getAddress } = require("../controllers/addressController");
const router = express.Router();

router.get("/:accountId", getAddress);

module.exports = router;

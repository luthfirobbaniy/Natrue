const express = require("express");
const { reduceStock } = require("../controllers/inventoryController");
const router = express.Router();

router.patch("/reduce/:accountId", reduceStock);

module.exports = router;

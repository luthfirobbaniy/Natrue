const express = require("express");
const {
	postTransactionData,
	getTransactionData,
} = require("../controllers/transactionController");
const router = express.Router();

router.get("/:accountId", getTransactionData);

router.post("/", postTransactionData);

module.exports = router;

const express = require("express");
const { getPaymentData } = require("../controllers/paymentController");
const router = express.Router();

router.get("/:accountId", getPaymentData);

module.exports = router;

const express = require("express");
const router = express.Router();

const {
	getCart,
	postCart,
	patchQtyCart,
	deleteCart,
	checkoutCart,
	postCartReorder,
} = require("../controllers/cartController");

router.get("/:accountId", getCart);

router.post("/", postCart);
router.post("/reorder", postCartReorder);

router.patch("/patch-qty/:cartId", patchQtyCart);

router.delete("/delete/:cartId", deleteCart);
router.delete("/checkout/:accountId", checkoutCart);

module.exports = router;

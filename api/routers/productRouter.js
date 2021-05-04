const express = require("express");
const {
	getAll,
	getPerCategory,
	getSpecific,
} = require("../controllers/productController");
const router = express.Router();

router.get("/all", getAll);
router.get("/category/:cat", getPerCategory);
router.get("/:name", getSpecific);

module.exports = router;

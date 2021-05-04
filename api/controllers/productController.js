const { Op } = require("sequelize");
const { product, category, inventory } = require("../models");

const getAll = async (req, res) => {
	try {
		const getData = await product.findAll();
		res.status(200).send(getData);
	} catch (err) {
		console.log(err);
	}
};

const getPerCategory = async (req, res) => {
	const { cat } = req.params;
	const { orderBy, load } = req.query;

	let order;

	orderBy === "alphabetical" ? (order = ["name", "ASC"]) : null;
	orderBy === "lowestPrice" ? (order = ["price", "ASC"]) : null;
	orderBy === "highestPrice" ? (order = ["price", "DESC"]) : null;

	try {
		const productData = await product.findAll({
			attributes: ["name", "price", "description", "imagepath"],
			include: [
				{
					model: category,
					required: true,
					where: {
						name: cat,
					},
					attributes: ["name"],
				},
				{
					model: inventory,
					required: true,
					where: {
						ready_stock: { [Op.gt]: 0 },
					},
					attributes: ["ready_stock", "paid_stock"],
				},
			],
			order: [order],
			limit: (load + 1) * 6,
		});

		const totalProduct = await product.count({
			include: [
				{
					model: category,
					required: true,
					attributes: ["name"],
					where: {
						name: cat,
					},
				},
				{
					model: inventory,
					required: true,
					where: {
						ready_stock: { [Op.gt]: 0 },
					},
					attributes: ["ready_stock"],
				},
			],
		});

		const categoryData = await category.findOne({
			where: {
				name: cat,
			},
		});

		const response = {
			category: categoryData.name,
			description: categoryData.description,
			imagepath: categoryData.imagepath,
			product: productData.map((val) => {
				return {
					name: val.name,
					price: val.price,
					description: val.description,
					imagepath: JSON.parse(val.imagepath),
					category: val.category.name,
					stock: val.inventory.ready_stock,
				};
			}),
			maxLoad: parseInt((totalProduct - 1) / 6),
		};

		res.status(200).send(response);
	} catch (err) {
		console.log(err);
	}
};

const getSpecific = async (req, res) => {
	const { name } = req.params;

	try {
		const productData = await product.findOne({
			where: {
				name,
			},
			include: [
				{
					model: category,
					required: true,
					attributes: ["name"],
				},
				{
					model: inventory,
					required: true,
					attributes: ["ready_stock", "paid_stock"],
				},
			],
			attributes: ["id", "name", "price", "description", "imagepath"],
		});

		const response = {
			category: productData.category.name,
			selectedProduct: {
				id: productData.id,
				name: productData.name,
				price: productData.price,
				description: productData.description,
				imagepath: JSON.parse(productData.imagepath),
				category: productData.category.name,
				stock: productData.inventory.ready_stock,
			},
		};

		res.status(200).send(response);
	} catch (err) {
		console.log(err);
	}
};

module.exports = {
	getAll,
	getPerCategory,
	getSpecific,
};

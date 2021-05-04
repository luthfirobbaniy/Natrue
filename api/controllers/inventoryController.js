const { inventory, cart, product } = require("../models");

const reduceStock = async (req, res) => {
	const { accountId } = req.params;

	try {
		const cartData = await cart.findAll({
			where: {
				account_id: accountId,
			},
			attributes: ["id", "quantity"],
			include: [
				{
					model: product,
					required: true,
					attributes: ["name"],
					include: [
						{
							model: inventory,
							required: true,
							attributes: ["id", "ready_stock"],
						},
					],
				},
			],
		});

		const checkStock = cartData.filter((val) => {
			return val.product.inventory.ready_stock >= val.quantity;
		});

		if (cartData.length !== checkStock.length)
			return res.status(200).send({ message: "Insufficient Stock" });

		cartData.map(async (val) => {
			const inventoryId = val.product.inventory.id;
			const quantity = val.quantity;

			const inventoryData = await inventory.findOne({
				where: {
					id: inventoryId,
				},
				attributes: ["ready_stock"],
			});

			await inventory.update(
				{
					ready_stock: inventoryData.ready_stock - quantity,
				},
				{
					where: {
						id: inventoryId,
					},
				}
			);
		});

		res.status(200).send({ message: "Inventory Updated" });
	} catch (err) {
		console.log(err);
	}
};

const restoreStock = () => {};

module.exports = { reduceStock, restoreStock };

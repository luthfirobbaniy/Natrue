const {
	cart,
	product,
	category,
	inventory,
	transactionItem,
} = require("../models");

const getCart = async (req, res) => {
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
					attributes: ["id", "name", "price", "imagepath"],
					include: [
						{
							model: category,
							required: true,
							attributes: ["name"],
						},
						{
							model: inventory,
							required: true,
							attributes: ["ready_stock"],
						},
					],
				},
			],
		});

		let response = {
			total: 0,
			data: [],
		};

		if (cartData.length > 0) {
			response = {
				total: cartData
					.map((val) => {
						return val.product.price * val.quantity;
					})
					.reduce((firstIndex, lastIndex) => {
						return firstIndex + lastIndex;
					}),
				data: cartData.map((val) => {
					return {
						id: val.id,
						productId: val.product.id,
						name: val.product.name,
						price: val.product.price,
						category: val.product.category.name,
						quantity: val.quantity,
						stock: val.product.inventory.ready_stock,
						imagepath: JSON.parse(val.product.imagepath),
					};
				}),
			};
		}

		res.status(200).send(response);
	} catch (err) {
		console.log(err);
	}
};

const postCart = async (req, res) => {
	const { accountId, productId, quantity } = req.body;

	try {
		const cartData = await cart.findOne({
			where: {
				product_id: productId,
			},
			attributes: ["id", "quantity"],
		});

		if (cartData) {
			await cart.update(
				{
					quantity: cartData.quantity + quantity,
				},
				{
					where: {
						id: cartData.id,
					},
				}
			);

			return res.status(200).send({ message: "Cart Updated" });
		}

		await cart.create({
			account_id: accountId,
			product_id: productId,
			quantity,
		});

		res.status(200).send({ message: "Cart Posted" });
	} catch (err) {
		console.log(err);
	}
};

const patchQtyCart = async (req, res) => {
	const { quantity } = req.body;
	const { cartId } = req.params;

	try {
		await cart.update(
			{
				quantity,
			},
			{
				where: {
					id: cartId,
				},
			}
		);

		res.status(200).send({ message: "Cart Updated" });
	} catch (err) {
		console.log(err);
	}
};

const deleteCart = async (req, res) => {
	const { cartId } = req.params;

	try {
		await cart.destroy({
			where: {
				id: cartId,
			},
		});

		res.status(200).send({ message: "Cart Updated" });
	} catch (err) {
		console.log(err);
	}
};

const checkoutCart = async (req, res) => {
	const { accountId } = req.params;

	try {
		await cart.destroy({
			where: {
				account_id: accountId,
			},
		});

		res.status(200).send({ message: "Cart Updated" });
	} catch (err) {
		console.log(err);
	}
};

const postCartReorder = async (req, res) => {
	const { accountId, transactionId } = req.body;

	try {
		const productData = await transactionItem.findAll({
			where: {
				transaction_id: transactionId,
			},
			attributes: ["product_id", "quantity"],
		});

		productData.map(async (val) => {
			const cartData = await cart.findOne({
				where: {
					product_id: val.product_id,
				},
				attributes: ["id", "quantity"],
			});

			if (cartData) {
				await cart.update(
					{
						quantity: cartData.quantity + val.quantity,
					},
					{
						where: {
							id: cartData.id,
						},
					}
				);

				return res.status(200).send({ message: "Cart Updated" });
			}

			return await cart.create({
				account_id: accountId,
				product_id: val.product_id,
				quantity: 1,
			});
		});

		res.status(200).send({ message: "Cart Posted" });
	} catch (err) {
		console.log(err);
	}
};

module.exports = {
	getCart,
	postCart,
	patchQtyCart,
	deleteCart,
	checkoutCart,
	postCartReorder,
};

const {
	transaction,
	transactionItem,
	cart,
	product,
	transactionStatus,
	category,
} = require("../models");

const getTransactionData = async (req, res) => {
	const { accountId } = req.params;

	try {
		const transactionData = await transaction.findAll({
			where: {
				account_id: accountId,
			},
			attributes: { exclude: ["transaction_status_id"] },
			order: [["id", "DESC"]],
			include: [
				{
					model: transactionItem,
					required: true,
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
							],
						},
					],
				},
				{
					model: transactionStatus,
					required: true,
					attributes: ["status"],
				},
			],
		});

		const response = transactionData.map((val) => {
			return {
				id: val.id,
				accountId: val.account_id,
				serialCode: val.serial_code,
				date: val.date,
				time: val.time,
				total: val.total,
				status: val.transaction_status.status,
				address: val.address,
				payment: val.payment,
				items: val.transaction_items.map((val) => {
					return {
						id: val.product.id,
						name: val.product.name,
						price: val.product.price,
						category: val.product.category.name,
						quantity: val.quantity,
						imagepath: JSON.parse(val.product.imagepath),
					};
				}),
			};
		});

		res.status(200).send(response);
	} catch (err) {
		console.log(err);
	}
};

const postTransactionData = async (req, res) => {
	const { accountId, address, payment } = req.body;

	try {
		const cartData = await cart.findAll({
			where: {
				account_id: accountId,
			},
			attributes: ["product_id", "quantity"],
			include: [
				{
					model: product,
					required: true,
					attributes: ["price"],
				},
			],
		});

		const date = new Date();

		const serialCode = date.getTime().toString().split("");
		serialCode.splice(11, serialCode.length - 11);

		const transactionData = await transaction.create({
			account_id: accountId,
			serial_code: `T${serialCode.join("")}`,
			date: `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`,
			time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
			transaction_status_id: 6,
			total: cartData
				.map((val) => {
					return val.product.price * val.quantity;
				})
				.reduce((firstIndex, lastIndex) => {
					return firstIndex + lastIndex;
				}),
			address: address,
			payment: payment,
		});

		cartData.map(async (val) => {
			await transactionItem.create({
				transaction_id: transactionData.id,
				product_id: val.product_id,
				quantity: val.quantity,
			});
		});

		res.status(200).send({
			message: "Transaction Created",
		});
	} catch (err) {
		console.log(err);
	}
};

module.exports = { getTransactionData, postTransactionData };

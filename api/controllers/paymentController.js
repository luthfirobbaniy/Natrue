const { payment } = require("../models");
const paymentMethod = require("../models/paymentMethod");

const getPaymentData = async (req, res) => {
	const { accountId } = req.params;

	try {
		const paymentData = await payment.findOne({
			where: {
				account_id: accountId,
			},
			attributes: ["account_id"],
			include: {
				model: paymentMethod,
				required: true,
				attributes: ["method"],
			},
		});

		const response = {
			method: paymentData.payment_method.method,
		};

		res.status(200).send(response);
	} catch (err) {
		console.log(err);
	}
};

module.exports = { getPaymentData };

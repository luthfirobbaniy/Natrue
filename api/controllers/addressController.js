const { address } = require("../models");

const getAddress = async (req, res) => {
	const { accountId } = req.params;

	try {
		const addressData = await address.findAll({
			where: {
				account_id: accountId,
			},
			order: [["default", "DESC"]],
		});

		const response = addressData.map((val) => {
			return {
				id: val.id,
				accountId: val.account_id,
				name: val.name,
				fullAddress: val.full_address,
				default: val.default,
			};
		});

		res.status(200).send(response);
	} catch (err) {
		console.log(err);
	}
};

module.exports = { getAddress };

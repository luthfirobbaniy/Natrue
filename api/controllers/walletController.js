const { wallet } = require("../models");

const getWallet = async (req, res) => {
	const { accountId } = req.params;

	try {
		const walletData = await wallet.findOne({
			where: {
				account_id: accountId,
			},
		});

		const response = {
			accountId: walletData.account_id,
			balance: walletData.balance,
		};

		res.status(200).send(response);
	} catch (err) {
		console.log(err);
	}
};

module.exports = { getWallet };

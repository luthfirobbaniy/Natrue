const { createJWTToken } = require("../helpers/jwt");
const { account } = require("../models");

const login = async (req, res) => {
	const { username, password } = req.body;

	try {
		const authData = await account.findOne({
			where: {
				username,
				password,
			},
			attributes: { exclude: ["password"] },
		});

		if (!authData) return res.status(404).send({ message: "User Not Found" });

		const response = {
			accountId: authData.id,
			username: authData.username,
			email: authData.email,
			roleId: authData.role_id,
			imagepath: authData.imagepath,
		};

		const token = createJWTToken(response);

		response.token = token;

		res.status(200).send(response);
	} catch (err) {
		console.log(err);
	}
};

const keepLogin = async (req, res) => {
	const { accountId } = req.user;

	try {
		const authData = await account.findOne({
			where: {
				id: accountId,
			},
			attributes: { exclude: ["password"] },
		});

		const response = {
			accountId: authData.id,
			username: authData.username,
			email: authData.email,
			roleId: authData.role_id,
			imagepath: authData.imagepath,
		};

		res.status(200).send(response);
	} catch (err) {
		console.log(err);
	}
};

module.exports = {
	login,
	keepLogin,
};

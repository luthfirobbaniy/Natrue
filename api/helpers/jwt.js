const jwt = require("jsonwebtoken");

const createJWTToken = (payload) => {
	return jwt.sign(payload, "token", {
		expiresIn: "24h",
	});
};

const checkToken = (req, res, next) => {
	if (res.method !== "OPTIONS") {
		jwt.verify(req.token, "token", (err, decoded) => {
			if (err) {
				return res.status(401).send({
					message: err.message,
					status: "Unauthorized",
				});
			}

			req.user = decoded;
			next();
		});
	}
};

module.exports = {
	createJWTToken,
	checkToken,
};

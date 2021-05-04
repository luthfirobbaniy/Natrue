const { DataTypes } = require("sequelize");
const { dbCon } = require("../dbCon");

const paymentMethod = dbCon.define(
	"payment_methods",
	{
		method: DataTypes.STRING,
	},
	{
		freezeTableName: true,
		timestamps: false,
	}
);

module.exports = paymentMethod;

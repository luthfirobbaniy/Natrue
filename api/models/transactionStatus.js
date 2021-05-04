const { DataTypes } = require("sequelize");
const { dbCon } = require("../dbCon");

const transactionStatus = dbCon.define(
	"transaction_statuses",
	{
		status: DataTypes.STRING,
	},
	{
		freezeTableName: true,
		timestamps: false,
	}
);

module.exports = transactionStatus;

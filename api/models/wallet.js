const { DataTypes } = require("sequelize");
const { dbCon } = require("../dbCon");

const wallet = dbCon.define(
	"wallets",
	{
		account_id: DataTypes.INTEGER,
		balance: DataTypes.INTEGER,
	},
	{
		freezeTableName: true,
		timestamps: false,
	}
);

module.exports = wallet;

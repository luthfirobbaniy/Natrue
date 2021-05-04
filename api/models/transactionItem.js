const { DataTypes } = require("sequelize");
const { dbCon } = require("../dbCon");

const transactionItem = dbCon.define(
	"transaction_items",
	{
		transaction_id: DataTypes.INTEGER,
		product_id: DataTypes.INTEGER,
		quantity: DataTypes.INTEGER,
	},
	{
		freezeTableName: true,
		timestamps: false,
	}
);

module.exports = transactionItem;

const { DataTypes } = require("sequelize");
const { dbCon } = require("../dbCon");

const transactionItem = require("./transactionItem");
const transactionStatus = require("./transactionStatus");

const transaction = dbCon.define(
	"transactions",
	{
		account_id: DataTypes.INTEGER,
		serial_code: DataTypes.STRING,
		date: DataTypes.STRING,
		time: DataTypes.STRING,
		transaction_status_id: DataTypes.SMALLINT,
		total: DataTypes.INTEGER,
		address: DataTypes.STRING,
		payment: DataTypes.STRING,
	},
	{
		freezeTableName: true,
		timestamps: false,
	}
);

transaction.hasMany(transactionItem, {
	foreignKey: "transaction_id",
});
transactionItem.belongsTo(transaction, {
	foreignKey: "transaction_id",
});

transaction.belongsTo(transactionStatus, {
	foreignKey: "transaction_status_id",
});
transactionStatus.hasMany(transaction, {
	foreignKey: "transaction_status_id",
});

module.exports = transaction;

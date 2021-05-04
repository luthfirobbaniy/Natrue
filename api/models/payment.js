const { DataTypes } = require("sequelize");
const { dbCon } = require("../dbCon");

const account = require("./account");
const paymentMethod = require("./paymentMethod");

const payment = dbCon.define(
	"payments",
	{
		account_id: DataTypes.INTEGER,
		payment_method_id: DataTypes.TINYINT,
	},
	{
		freezeTableName: true,
		timestamps: false,
	}
);

payment.belongsTo(account, {
	foreignKey: "account_id",
});
account.hasMany(payment, {
	foreignKey: "account_id",
});

payment.belongsTo(paymentMethod, {
	foreignKey: "payment_method_id",
});
paymentMethod.hasMany(payment, {
	foreignKey: "payment_method_id",
});

module.exports = payment;

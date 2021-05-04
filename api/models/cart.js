const { DataTypes } = require("sequelize");
const { dbCon } = require("../dbCon");

const account = require("./account");
const product = require("./product");

const cart = dbCon.define(
	"carts",
	{
		account_id: DataTypes.INTEGER,
		product_id: DataTypes.INTEGER,
		quantity: DataTypes.INTEGER,
	},
	{
		freezeTableName: true,
		timestamps: false,
	}
);

account.hasMany(cart, {
	foreignKey: "account_id",
});
cart.belongsTo(account, {
	foreignKey: "account_id",
});

product.hasMany(cart, {
	foreignKey: "product_id",
});
cart.belongsTo(product, {
	foreignKey: "product_id",
});
module.exports = cart;

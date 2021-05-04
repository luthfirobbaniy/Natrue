const { DataTypes } = require("sequelize");
const { dbCon } = require("../dbCon");

const category = require("./category");
const inventory = require("./inventory");
const transactionItem = require("./transactionItem");

const product = dbCon.define(
	"products",
	{
		name: DataTypes.STRING,
		price: DataTypes.INTEGER,
		description: DataTypes.STRING,
		category_id: DataTypes.SMALLINT,
		imagepath: DataTypes.STRING,
	},
	{
		freezeTableName: true,
		timestamps: false,
	}
);

product.belongsTo(category, {
	foreignKey: "category_id",
});
category.hasMany(product, {
	foreignKey: "category_id",
});

product.hasOne(inventory, {
	foreignKey: "product_id",
});
inventory.belongsTo(product, {
	foreignKey: "product_id",
});

product.hasMany(transactionItem, {
	foreignKey: "product_id",
});
transactionItem.belongsTo(product, {
	foreignKey: "product_id",
});

module.exports = product;

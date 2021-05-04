const { DataTypes } = require("sequelize");
const { dbCon } = require("../dbCon");

const inventory = dbCon.define(
	"inventories",
	{
		product_id: DataTypes.INTEGER,
		ready_stock: DataTypes.INTEGER,
		paid_stock: DataTypes.INTEGER,
	},
	{
		freezeTableName: true,
		timestamps: false,
	}
);

module.exports = inventory;

const { DataTypes } = require("sequelize");
const { dbCon } = require("../dbCon");

const category = dbCon.define(
	"categories",
	{
		name: DataTypes.STRING,
		description: DataTypes.STRING,
		imagepath: DataTypes.STRING,
	},
	{
		freezeTableName: true,
		timestamps: false,
	}
);

module.exports = category;

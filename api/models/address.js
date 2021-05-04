const { DataTypes } = require("sequelize");
const { dbCon } = require("../dbCon");

const address = dbCon.define(
	"addresses",
	{
		account_id: DataTypes.INTEGER,
		name: DataTypes.STRING,
		full_address: DataTypes.STRING,
		default: DataTypes.TINYINT,
	},
	{
		freezeTableName: true,
		timestamps: false,
	}
);

module.exports = address;

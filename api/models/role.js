const { DataTypes } = require("sequelize");
const { dbCon } = require("../dbCon");

const role = dbCon.define(
	"roles",
	{
		role: DataTypes.STRING,
	},
	{
		freezeTableName: true,
		timestamps: false,
	}
);

module.exports = role;

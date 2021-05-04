const { DataTypes } = require("sequelize");
const { dbCon } = require("../dbCon");

const account = dbCon.define(
	"accounts",
	{
		username: DataTypes.STRING,
		email: DataTypes.STRING,
		password: DataTypes.STRING,
		role_id: DataTypes.SMALLINT,
		imagepath: DataTypes.STRING,
	},
	{
		freezeTableName: true,
		timestamps: false,
	}
);

module.exports = account;

const { Sequelize } = require("sequelize");

const dbCon = new Sequelize("natrue_db", "username", "password", {
	host: "127.0.0.1",
	dialect: "mysql",
});

module.exports = { dbCon };

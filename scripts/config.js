const { Sequelize } = require("sequelize");

const host = "localhost";
const dialect = "postgres";
const dbName = "app_db";
const username = "admin";
const password = "admin123";

const sequelizeInstance = new Sequelize(dbName, username, password, {
  host,
  dialect,
});

module.exports = sequelizeInstance;

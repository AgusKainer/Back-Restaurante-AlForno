// const { Sequelize } = require("sequelize");
// const { DB_HOST, DB_NAME, DB_PASS, DB_USER } = require("../utils/config");

// const db = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
//   host: DB_HOST,
//   dialect: "mysql",
// });

// module.exports = db;

const { Sequelize } = require("sequelize");

const db = new Sequelize(
  process.env.MYSQLDATABASE,
  process.env.MYSQLUSER,
  process.env.MYSQLPASSWORD,
  {
    host: process.env.MYSQLHOST,
    port: process.env.MYSQLPORT,
    dialect: "mysql",
    logging: false,
  }
);

module.exports = db;

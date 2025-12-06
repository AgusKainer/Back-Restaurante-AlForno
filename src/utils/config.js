const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const PORT = process.env.PORT;
const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_HOST = process.env.DB_HOST;
const SECRET = process.env.SECRET;
const PASS_APP = process.env.PASS_APP;
const EMAIL = process.env.EMAIL;

console.log(PASS_APP, EMAIL);

module.exports = {
  PORT,
  DB_HOST,
  DB_NAME,
  DB_PASS,
  DB_USER,
  SECRET,
  PASS_APP,
  EMAIL,
};

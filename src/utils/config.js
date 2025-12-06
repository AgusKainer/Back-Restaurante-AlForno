require("dotenv").config();

const PORT = process.env.PORT;
const SECRET = process.env.SECRET;
const PASS_APP = process.env.PASS_APP;
const EMAIL = process.env.EMAIL;

module.exports = {
  PORT,
  SECRET,
  PASS_APP,
  EMAIL,
};

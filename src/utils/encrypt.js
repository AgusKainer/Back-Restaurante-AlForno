const bcrypt = require("bcryptjs");

const hashPassword = async (pass) => {
  return await bcrypt.hash(pass, 5);
};

const comparePassword = async (pass, passhash) => {
  return await bcrypt.compare(pass, passhash);
};

module.exports = { comparePassword, hashPassword };

const jwt = require("jsonwebtoken");
const { SECRET } = require("./config");

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, SECRET);
};

const verifyToken = (token) => {
  return jwt.verify(token, SECRET);
};

module.exports = { generateToken, verifyToken };

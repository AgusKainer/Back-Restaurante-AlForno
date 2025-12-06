const { Admin } = require("../../../models/index.model");
const { hashPassword } = require("../../../utils/encrypt");

const postAdminServices = async ({ usuario, password }) => {
  const hash = await hashPassword(password);
  const admin = await Admin.create({
    usuario,
    password: hash,
  });

  return admin;
};

module.exports = postAdminServices;

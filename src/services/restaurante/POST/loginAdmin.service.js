const { comparePassword } = require("../../../utils/encrypt");
const { generateToken } = require("../../../utils/token");
const { Admin } = require("../../../models/index.model");

const loginAdminServices = async ({ usuario, password }) => {
  const user = await Admin.findOne({
    where: { usuario },
  });

  if (!user) throw new Error("Usuario no encontrado");
  const pass = await comparePassword(password, user.password);
  if (!pass) throw new Error("Contraseña incorrecta");

  const token = generateToken(user.id);

  return { user, token };
};

module.exports = loginAdminServices;

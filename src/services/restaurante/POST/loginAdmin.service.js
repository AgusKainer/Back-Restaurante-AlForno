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

/*
{
    "user": {
        "id": "b3a546fb-5478-422e-af5a-e3af658f37fc",
        "usuario": "agus",
        "password": "$2b$05$gxdUNM.UfOKYjxeqbSYdKOnL5N.9xWoFkcPq5XBS.GPWx2kLBgsp2", 123456
        "rol": "admin",
        "createdAt": "2025-08-29T12:24:28.000Z",
        "updatedAt": "2025-08-29T12:24:28.000Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImIzYTU0NmZiLTU0NzgtNDIyZS1hZjVhLWUzYWY2NThmMzdmYyIsImlhdCI6MTc1NjQ3MTIzOH0.3oJwSJhOBjE4IfUJ7PzE7SRw9xwFg0or2FvYfxljQCc"
}
*/

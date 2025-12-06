const { loginAdminServices } = require("../../../services/inde.service");

const loginAdminController = async (req, res) => {
  try {
    const { usuario, password } = req.body;

    const { user, token } = await loginAdminServices({ usuario, password });
    !user
      ? res.status(404).json({ message: "Usuario no encontrado" })
      : res.status(200).json({ user, token });
  } catch (error) {
    res.status(500).json({ message: "Error en el servidor: ", error });
  }
};

module.exports = loginAdminController;

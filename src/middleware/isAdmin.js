const { verifyToken } = require("../utils/token");
const { Admin } = require("../models/index.model");

const isAdmin = (requiredRole) => {
  return async (req, res, next) => {
    try {
      const token = req.headers.authorization?.split(" ")[1];
      if (!token) return res.status(401).json({ message: "Token vacío" });

      const decoded = verifyToken(token);
      const user = await Admin.findByPk(decoded.id);

      if (!user)
        return res.status(404).json({ message: "Usuario no encontrado" });
      if (user.rol !== requiredRole)
        return res.status(403).json({
          message: `Acceso denegado: se requiere rol ${requiredRole}`,
        });

      req.user = user;
      next();
    } catch (error) {
      res.status(401).json({ message: "Token inválido" });
    }
  };
};

module.exports = isAdmin;

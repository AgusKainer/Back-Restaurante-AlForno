const { postMesaServices } = require("../../../services/inde.service");

const postMesaContreller = async (req, res) => {
  try {
    const { numero_mesa, capacidad } = req.body;

    const mesa = await postMesaServices({ numero_mesa, capacidad });
    mesa.length === 0
      ? res.status(404).json({ message: "No se puede crear la mesa" })
      : res.status(200).json(mesa);
  } catch (error) {
    res
      .status(500)
      .json({ message: `ERROR EN EL SERVER, VER CONTROLLER: ${error}` });
  }
};

module.exports = postMesaContreller;

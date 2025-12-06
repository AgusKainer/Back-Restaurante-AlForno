const { getMesaServices } = require("../../../services/inde.service");

const getMesaController = async (req, res) => {
  try {
    const mesa = await getMesaServices();
    mesa.length === 0
      ? res.status(404).json("No hay mesas")
      : res.status(200).json(mesa);
  } catch (error) {
    res.status(500).json({ message: `ERROR EN EL CONTROLLER: ${error}` });
  }
};

module.exports = getMesaController;

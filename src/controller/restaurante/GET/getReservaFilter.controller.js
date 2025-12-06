const { getReservaFilterService } = require("../../../services/inde.service");

const getReservaFilterController = async (req, res) => {
  try {
    const filtros = req.query;
    const reservas = await getReservaFilterService(filtros);
    !reservas
      ? res.status(404).json({ message: "ERROR EN HACER LOS FILTROS" })
      : res.status(200).json(reservas);
  } catch (error) {
    console.log(`ERROR EN EL SERVIDOR: ${error}`);

    res.status(500).json({ message: `ERROR EN EL SERVIDOR` });
  }
};

module.exports = getReservaFilterController;

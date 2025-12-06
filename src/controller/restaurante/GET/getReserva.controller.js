const { getReservaServices } = require("../../../services/inde.service");

const getReservaController = async (req, res) => {
  try {
    const reserva = await getReservaServices();
    reserva.length === 0
      ? res.status(404).json({ message: "No hay reservas" })
      : res.status(200).json(reserva);
  } catch (error) {
    res.statu(500).json({ message: `ERROR EN EL CONTROLLER: ${error}` });
  }
};

module.exports = getReservaController;

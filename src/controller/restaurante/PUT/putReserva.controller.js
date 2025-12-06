const { putservaService } = require("../../../services/inde.service");

const putReservaController = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, fecha, ubicacion, evento } = req.body;
    const reserva = await putservaService({
      id,
      nombre,
      fecha,
      evento,
      ubicacion,
    });
    !reserva
      ? res.status(404).json({ message: "No se puede actualizar" })
      : res.status(200).json(reserva);
  } catch (error) {
    console.log(`ÈRROR CONTROLELR: ${error}`);
    res.status(500).json({ message: "ERROR EN EL SERVIDOR" });
  }
};

module.exports = putReservaController;

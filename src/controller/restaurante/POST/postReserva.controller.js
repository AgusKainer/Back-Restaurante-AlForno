const { postReservServices } = require("../../../services/inde.service");

const postReservaController = async (req, res) => {
  try {
    const { nombre, fecha, evento, ubicacion, numero_mesa } = req.body;
    if (!nombre || !fecha || !evento || !ubicacion || !numero_mesa)
      res.status(415).send("Faltan datos por ingresar");
    console.log("que llega a la reserva", req.body);

    const reserva = await postReservServices({
      nombre,
      fecha,
      evento,
      ubicacion,
      numero_mesa,
    });

    res.status(200).json(reserva);
  } catch (error) {
    res
      .status(500)
      .json({ message: `ERROR EN EL SERVIDOR, REVISAR CONTROLLER: ${error}` });
  }
};

module.exports = postReservaController;

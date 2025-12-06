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
    console.log("reserva desde el back: ", reserva);
  } catch (error) {
    console.log("error desde el back: ", error);

    res
      .status(500)
      .json({ message: `ERROR EN EL SERVIDOR, REVISAR CONTROLLER: ${error}` });
  }
};

module.exports = postReservaController;

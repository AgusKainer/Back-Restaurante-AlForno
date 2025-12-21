const { email } = require("../../../services/inde.service");
const { Reserva, Mesa } = require("../../../models/index.model");

const sendMailController = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("id del param_: ".id);

    const reservaId = await Reserva.findByPk(id, {
      include: {
        model: Mesa,
        attributes: ["numero_mesa"],
      },
    });
    console.log("reserva encontrada: ".reservaId);

    if (!reservaId) return res.status(404).json({ message: "No hay reserva" });
    const { nombre, fecha, evento, ubicacion } = reservaId;
    const mesasReservas = reservaId.Mesas.map((m) => m.numero_mesa).join(", ");
    const texto = `
    Hola ${
      nombre || "Cliente"
    }, gracias por reservar con nosotros Restaurante "Al Forno".
    🗓️ Fecha de la reserva: ${fecha},
    🍽️ Evento: ${evento},
    🗺️ Ubicaicon: ${ubicacion}.
    🪑 Mesa: ${mesasReservas}

    Este correo es automatico, no debe de responder, cualquier inquietud enviar mensaje a nuestro numero: 3756458989
    `;

    await email({ to: nombre, text: texto });
    res.status(200).json({ message: "Correo enviado" });
  } catch (error) {
    res.status(500).json({ message: "ERROR EN EL SERVIDOR: ", error });
  }
};

module.exports = sendMailController;

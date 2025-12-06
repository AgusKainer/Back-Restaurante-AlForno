const { Mesa, Reserva } = require("../../../models/index.model");

const postReservServices = async ({
  nombre,
  fecha,
  evento,
  ubicacion,
  numero_mesa,
}) => {
  const mesa = await Mesa.findAll({ where: { numero_mesa: numero_mesa } });

  if (mesa.length !== numero_mesa.length) {
    throw new Error("Uno o mas mesas no existen");
  }

  // Validación de disponibilidad
  for (const m of mesa) {
    const reservasOcupadas = await m.getReservas({
      where: {
        fecha,
        evento,
        ubicacion,
      },
    });

    if (reservasOcupadas.length > 0) {
      throw new Error(
        `La mesa ${m.numero_mesa} ya está ocupada para ese evento, fecha y ubicación.`
      );
    }
  }

  const reserva = await Reserva.create({
    nombre,
    fecha,
    evento,
    ubicacion,
  });

  return await reserva.addMesas(mesa);
};

module.exports = postReservServices;

const { Reserva } = require("../../../models/index.model");

const putservaService = async ({ id, nombre, fecha, evento, ubicacion }) => {
  const reserva = await Reserva.findByPk(id);

  if (!reserva) return "No hay reserva a modificar";

  await reserva.update({ nombre, fecha, evento, ubicacion });

  return reserva;
};

module.exports = putservaService;

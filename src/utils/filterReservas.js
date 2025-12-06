const { Op } = require("sequelize");

const filterReservas = ({ fecha, evento, ubicacion }) => {
  const query = {};

  if (fecha) query.fecha = fecha;
  if (evento) query.evento = { [Op.like]: evento.trim() };
  if (ubicacion) query.ubicacion = { [Op.like]: ubicacion.trim() };

  return query;
};

module.exports = filterReservas;

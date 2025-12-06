const { Reserva, Mesa } = require("../../../models/index.model");

const getReservaServices = () => {
  return Reserva.findAll({ include: Mesa });
};

module.exports = getReservaServices;

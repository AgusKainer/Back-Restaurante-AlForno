const { Reserva } = require("../../../models/index.model");

module.exports = deleteReservaServices = async ({ id }) => {
  return await Reserva.destroy({ where: { id } });
};

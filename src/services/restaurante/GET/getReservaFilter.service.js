const filterReservas = require("../../../utils/filterReservas");
const { Reserva, Mesa } = require("../../../models/index.model");

const getReservaFilterService = async (filtros) => {
  const where = filterReservas(filtros);
  console.log("WHERE DEL BACK: ", where);

  const reservaFilter = await Reserva.findAll({
    where,
    include: [
      {
        model: Mesa,
        through: { attributes: [] },
      },
    ],
  });
  return reservaFilter;
};

module.exports = getReservaFilterService;

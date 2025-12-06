const { Mesa, Reserva } = require("../../../models/index.model");

const getMesasDisponibleService = async ({ fecha, evento, ubicacion }) => {
  const mesas = await Mesa.findAll();

  const mesaDisponible = [];

  for (const mesa of mesas) {
    const reservas = await mesa.getReservas({
      where: { fecha, evento, ubicacion },
    });

    if (reservas.length === 0) {
      mesaDisponible.push(mesa);
    }
  }

  return mesaDisponible;
};

module.exports = getMesasDisponibleService;

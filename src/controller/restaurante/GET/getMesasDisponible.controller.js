const { getMesasDisponibleService } = require("../../../services/inde.service");

const getMesasDisponiblesController = async (req, res) => {
  try {
    const { fecha, evento, ubicacion } = req.query;

    if (!fecha || !evento || !ubicacion) {
      return res
        .status(400)
        .json({ message: "Faltan filtros: fecha, evento o ubicación" });
    }

    const disponibles = await getMesasDisponibleService({
      fecha,
      evento,
      ubicacion,
    });

    res.status(200).json(disponibles);
  } catch (error) {
    console.error("Error al buscar mesas disponibles:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

module.exports = getMesasDisponiblesController;

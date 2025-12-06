const { deleteReservaServices } = require("../../../services/inde.service");

const deleteReservaController = async (req, res) => {
  try {
    const { id } = req.params;
    const dele = await deleteReservaServices({ id });
    !dele
      ? res
          .status(404)
          .json({
            message: "No se puede eliminar, ya que no existe una reserva",
          })
      : res.status(200).json({ message: "Reserva eliminada" });
  } catch (error) {
    console.log("error en el controller: ", error);
    res.status(500).json({ message: "ERROR EN EL SERVIDOR: ", error });
  }
};

module.exports = deleteReservaController;

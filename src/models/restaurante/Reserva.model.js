const { DataTypes } = require("sequelize");
const db = require("../../db/DB");

const Reserva = db.define("Reserva", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fecha: {
    type: DataTypes.DATEONLY,
  },
  evento: {
    type: DataTypes.ENUM(
      "Cumpleaños",
      "Aniversario",
      "Almuerzo",
      "Cena",
      "Otro"
    ),
  },
  ubicacion: {
    type: DataTypes.ENUM("interior", "pasillo", "patio"),
  },
});

module.exports = Reserva;

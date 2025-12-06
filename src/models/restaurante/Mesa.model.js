const { DataTypes } = require("sequelize");
const db = require("../../db/DB");

const Mesa = db.define("Mesa", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  numero_mesa: {
    type: DataTypes.INTEGER,
    unique: true,
  },
  capacidad: {
    type: DataTypes.INTEGER,
  },
});

module.exports = Mesa;

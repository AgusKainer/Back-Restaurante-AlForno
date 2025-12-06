const { DataTypes } = require("sequelize");
const db = require("../../db/DB");

const Admin = db.define("Admin", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  usuario: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  rol: {
    type: DataTypes.STRING,
    defaultValue: "admin",
  },
});

module.exports = Admin;

const Mesa = require("./restaurante/Mesa.model");
const Reserva = require("./restaurante/Reserva.model");
const Admin = require("./restaurante/Admin.model");

Reserva.belongsToMany(Mesa, { through: "ReservaMesa" });
Mesa.belongsToMany(Reserva, { through: "ReservaMesa" });

module.exports = { Mesa, Admin, Reserva };

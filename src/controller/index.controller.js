const getMesaController = require("./restaurante/GET/getMesa.controller");
const getReservaController = require("./restaurante/GET/getReserva.controller");
const getMesasDisponiblesController = require("./restaurante/GET/getMesasDisponible.controller");

//FILTER

const getReservaFilterController = require("./restaurante/GET/getReservaFilter.controller");

//POST
const postMesaContreller = require("./restaurante/POST/postMesa.controller");
const postReservaController = require("./restaurante/POST/postReserva.controller");
// ADMIN
const postAdminController = require("./restaurante/POST/postAdmin.controller");
const loginAdminController = require("./restaurante/POST/loginAdmin.controller");

// EMAIL
const sendMailController = require("./restaurante/POST/email.controller");

//delete
const deleteReservaController = require("./restaurante/DELETE/delete.controller");

// put
const putReservaController = require("./restaurante/PUT/putReserva.controller");
module.exports = {
  getMesasDisponiblesController,
  getMesaController,
  getReservaController,
  getReservaFilterController,
  postMesaContreller,
  postReservaController,
  postAdminController,
  loginAdminController,
  sendMailController,
  deleteReservaController,
  putReservaController,
};

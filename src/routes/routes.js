const { Router } = require("express");
const {
  getMesaController,
  getReservaController,
  getMesasDisponiblesController,
  //FILTER
  getReservaFilterController,
  //POST
  postMesaContreller,
  postReservaController,
  //ADMIN
  postAdminController,
  loginAdminController,
  //EMAI
  sendMailController,
  //DELETE
  deleteReservaController,
  //PUT
  putReservaController,
} = require("../controller/index.controller");

const isAdmin = require("../middleware/isAdmin");

const router = Router();

// Ruta base para probar que funciona
router.get('/', (req, res) => {
  res.send('API funcionando correctamente 🚀');
});
router.get('/favicon.ico', (req, res) => res.status(204).end());

// Ejemplo de otra ruta
router.get('/status', (req, res) => {
  res.json({ ok: true, message: 'Backend activo en Railway' });
});

router.get("/mesa", getMesaController);
router.get("/mesaDisponible", getMesasDisponiblesController);
router.get("/reserva", isAdmin("admin"), getReservaController);

//FILTER
router.get("/filterReserva", getReservaFilterController);
//POST
router.post("/postmesa", isAdmin("admin"), postMesaContreller);
router.post("/postreserva", postReservaController);
//MEAIL
router.post("/email/:id", sendMailController);
//ADMIN
router.post("/register", postAdminController);
router.post("/login", loginAdminController);

//DELETE
router.delete("/eliminar/:id", isAdmin("admin"), deleteReservaController);

//PUT
router.put("/actualizar/:id", isAdmin("admin"), putReservaController);

module.exports = router;

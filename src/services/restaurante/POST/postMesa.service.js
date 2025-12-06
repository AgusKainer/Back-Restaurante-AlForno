const { Mesa } = require("../../../models/index.model");

const postMesaServices = async ({ numero_mesa, capacidad }) => {
  const mesa = await Mesa.create({ numero_mesa, capacidad });
  return mesa;
};

module.exports = postMesaServices;

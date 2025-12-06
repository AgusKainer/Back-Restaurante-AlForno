const { Mesa } = require("../../../models/index.model");

const getMesaServices = async () => {
  return await Mesa.findAll();
};

module.exports = getMesaServices;

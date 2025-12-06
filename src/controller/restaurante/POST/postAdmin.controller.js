const { postAdminServices } = require("../../../services/inde.service");

const postAdminController = async (req, res) => {
  try {
    const { usuario, password } = req.body;
    const admin = await postAdminServices({ usuario, password });
    !admin
      ? res.status(404).json({ message: "No se puede crear el admin" })
      : res.status(200).json(admin);
  } catch (error) {
    res.status(500).json({
      message: "ERROR EN EL SERVIDOR",
      error: error.message || "Error desconocido",
    });
  }
};

module.exports = postAdminController;

/* 
{
    "id": "7e42826c-904b-4839-b73f-15b0a8e3fd51",
    "rol": "admin",
    "usuario": "jose",
    "password": "$2b$05$z.VaOMup4AkZxp0QntZBT.7wSbP.QF3O7NGa2Dm7nWFVhgcrFTgoq",
    "updatedAt": "2025-08-22T21:13:07.547Z",
    "createdAt": "2025-08-22T21:13:07.547Z"
}

{
    "id": "b3a546fb-5478-422e-af5a-e3af658f37fc",
    "rol": "admin",
    "usuario": "agus",
    "password": "$2b$05$gxdUNM.UfOKYjxeqbSYdKOnL5N.9xWoFkcPq5XBS.GPWx2kLBgsp2",
    "updatedAt": "2025-08-29T12:24:28.112Z",
    "createdAt": "2025-08-29T12:24:28.112Z"
}
*/

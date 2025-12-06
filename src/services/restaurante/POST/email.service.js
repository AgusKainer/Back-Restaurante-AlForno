const nodemailer = require("nodemailer");
const { EMAIL, PASS_APP } = require("../../../utils/config");
console.log("email: ", EMAIL);
console.log("pass: ", PASS_APP);

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL,
    pass: PASS_APP,
  },
});

const email = async ({ to, text }) => {
  return await transporter.sendMail({
    from: EMAIL,
    to,
    subject: "Reserva de turno del restaurante",
    text,
  });
};
transporter
  .verify()
  .then(() => {
    console.log("Funciona");
  })
  .catch((error) => {
    console.log("ERROR EN LA VERIFICACION DEL CORREO: ", error);
  });

module.exports = email;

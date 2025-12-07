const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS_APP,
  },
});

const email = async ({ to, text }) => {
  return await transporter.sendMail({
    from: process.env.EMAIL,
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

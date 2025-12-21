const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.API_EMAIL,
  },
});
console.log("Auth user:", process.env.EMAIL);
console.log("Auth pass (API key):", process.env.API_EMAIL ? "OK" : "MISSING");
const email = async ({ to, text }) => {
  console.log("intentando enviar ", to);
  console.log("contenido: ", text);

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

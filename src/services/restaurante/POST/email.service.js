// const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//   host: "smtp-relay.brevo.com",
//   port: 587,
//   secure: false,
//   auth: {
//     user: process.env.EMAIL,
//     pass: process.env.API_EMAIL,
//   },
// });
// console.log("Auth user:", process.env.EMAIL);
// console.log("Auth pass (API key):", process.env.API_EMAIL ? "OK" : "MISSING");
// const email = async ({ to, text }) => {
//   console.log("intentando enviar ", to);
//   console.log("contenido: ", text);

//   return await transporter.sendMail({
//     from: process.env.EMAIL,
//     to,
//     subject: "Reserva de turno del restaurante",
//     text,
//   });
// };
// transporter
//   .verify()
//   .then(() => {
//     console.log("Funciona");
//   })
//   .catch((error) => {
//     console.log("ERROR EN LA VERIFICACION DEL CORREO: ", error);
//   });

// module.exports = email;

const brevo = require("@getbrevo/brevo");

// Configurar cliente con tu API Key
const client = new brevo.TransactionalEmailsApi();
client.setApiKey(
  brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.API_EMAIL
);

// Función para enviar correo
const email = async ({ to, text }) => {
  try {
    const sendSmtpEmail = {
      sender: { email: process.env.EMAIL }, // remitente verificado en Brevo
      to: [{ email: to }], // destinatario
      subject: "Reserva de turno del restaurante",
      textContent: text,
    };
    console.log("API_EMAIL:", process.env.API_EMAIL ? "OK" : "MISSING");
    console.log("EMAIL:", process.env.EMAIL);
    const result = await client.sendTransacEmail(sendSmtpEmail);
    console.log("Correo enviado:", result);
    return result;
  } catch (error) {
    console.error("Error al enviar correo con Brevo:", error);
    throw error;
  }
};

module.exports = email;

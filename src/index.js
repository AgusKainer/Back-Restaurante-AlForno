require("dotenv").config();

const app = require("./app");
const db = require("./db/DB");

const PORT = process.env.PORT || 3000;

const server = async () => {
  try {
    console.log("PUERTO:", PORT);

    await db.authenticate();
    await db.sync();
    console.log("DB CONECTADA");

    app.listen(PORT, "0.0.0.0", () => {
      console.log("SERVER LEVANTADO EN PUERTO:", PORT);
    });
  } catch (error) {
    console.log("ERROR AL LEVANTAR EL SERVIDOR:", error);
  }
};

server();

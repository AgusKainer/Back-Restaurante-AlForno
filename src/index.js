const app = require("./app");
const path = require("path");
require("dotenv").config();
const db = require("./db/DB");

const PORT = process.env.PORT || 3000;
const server = async () => {
  try {
    console.log("puerto: ", PORT);

    await db.sync();
    console.log("db conectada");
    app.listen(PORT, "0.0.0.0", () => {
      console.log("SERVER LEVANTADO EN PUERTO:", PORT);
    });
  } catch (error) {
    console.log("ERROR AL LAVANTAR EL SERVIDOR", error);
  }
};

server();

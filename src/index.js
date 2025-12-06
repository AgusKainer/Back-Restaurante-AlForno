const app = require("./app");
const { PORT } = require("./utils/config");
const db = require("./db/DB");

const server = async () => {
  try {
    console.log("puerto: ", PORT);

    await db.sync();
    console.log("db conectada");
    app.listen(PORT, () => {
      console.log("SERVER LAVANTADO EN PUERTO: ", PORT);
    });
  } catch (error) {
    console.log("ERROR AL LAVANTAR EL SERVIDOR", error);
  }
};

server();

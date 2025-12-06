const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const router = require("./routes/routes");
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
// Manejo del favicon directamente en app
app.use("/favicon.ico", (req, res) => {
  res.sendFile(path.join(__dirname, "favicon.ico"));
});

// Montar el router
app.use("/", router);

module.exports = app;

// {
//     origin: "http://localhost:5173",
//     credentials: true,
//   }

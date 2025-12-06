const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const router = require("./routes/routes");
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(morgan("dev"));
app.get('/favicon.ico', (req, res) => res.status(204).end());
app.use(router);

module.exports = app;

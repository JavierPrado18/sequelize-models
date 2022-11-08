const express = require("express");
const initModels = require("./models/initModels");
// importamos la instancia db de database.js
const db = require("./utils/database");
// importo las rutas del usuario
const userRoutes = require("./Routes/users.routes");
//importando dotenv para que maneje las variables de entorno
require("dotenv").config()
const app = express();
//añadinedo el middleware
app.use(express.json());

const PORT =process.env.PORT || 8000;

db.authenticate() // devuelve una promesa
  .then(() => console.log("Autenticación exitosa"))
  .catch((error) => console.log(error));

db.sync({ force: false }) // devuelve una promesa
  .then(() => console.log("Base sincronizada"))
  .catch((error) => console.log(error));

initModels();

app.get("/", (req, res) => {
  res.status(200).json("Todo bien");
});

app.use("/api/v1", userRoutes);

app.listen(PORT, () => console.log("Servidor corriendo",PORT));

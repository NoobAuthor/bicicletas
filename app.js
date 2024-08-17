const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Bienvenido a Express");
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

let bicicletas = [
  { id: 1, lat: -33.447487, lng: -70.673676, modelo: "Mountain Bike" },
  { id: 2, lat: -33.451284, lng: -70.665581, modelo: "City Bike" },
];

app.get("/bicicletas", (req, res) => {
  res.json(bicicletas);
});

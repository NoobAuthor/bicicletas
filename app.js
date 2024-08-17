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

function getRandomCoordinate(center, range) {
    const randomOffset = (Math.random() - 0.5) * range;
    return center + randomOffset;
}

const centerLat = -33.4489;
const centerLng = -70.6693;
const range = 0.01;

let bicicletas = Array.from({ length: 5 }, (_, id) => ({
    id: id + 1,
    lat: getRandomCoordinate(centerLat, range),
    lng: getRandomCoordinate(centerLng, range),
    modelo: `Bicicleta ${id + 1}`
}));

app.get("/bicicletas", (req, res) => {
  res.json(bicicletas);
});

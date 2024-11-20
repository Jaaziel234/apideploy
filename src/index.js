require("dotenv").config();

const express = require("express");

const port = process.env.PORT || 5000; // Asegúrate de usar un puerto por defecto en caso de que no esté definido

const cors = require('cors');

const app = express();

// Configurar CORS para permitir solicitudes de tu dominio local
app.use(cors({
    origin: '*', // Cambia esto por tu dominio o usa '*' para permitir cualquier origen
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Asegúrate de permitir los métodos que usas
    allowedHeaders: ['Content-Type'] // Si necesitas otros encabezados personalizados, agrégales
}));

app.get("/", (req, res) => {
    res.send({
        message: "codigozoom",
    });
});

app.listen(port, () => {
    console.log(`Example app listening at port: ${port}`);
});

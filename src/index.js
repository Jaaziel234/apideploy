const express = require('express');
const app = express();

// Puerto configurado automáticamente por Render o predeterminado a 3000
const port = process.env.PORT || 3000;

// Datos iniciales
let nombres = ['Juan', 'María'];

// Middleware para interpretar JSON en el cuerpo de las solicitudes
app.use(express.json());

// Ruta para obtener los nombres
app.get('/api/nombres', (req, res) => {
    res.json({ mensaje: 'Lista de nombres', nombres });
});

// Ruta para agregar un nuevo nombre
app.post('/api/nombres', (req, res) => {
    const { nombre } = req.body;
    if (!nombre) {
        return res.status(400).json({ error: 'El campo "nombre" es obligatorio' });
    }
    nombres.push(nombre);
    res.status(201).json({ mensaje: 'Nombre agregado', nombres });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});

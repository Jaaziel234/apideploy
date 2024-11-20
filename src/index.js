const express = require('express');
const app = express();
const port = 3000;

let usuarios = [
    { id: 1, nombre: 'Juan Pérez', edad: 30 },
    { id: 2, nombre: 'María Gómez', edad: 25 }
];

// Middleware para interpretar JSON
app.use(express.json());

// Ruta para obtener todos los usuarios
app.get('/api/usuarios', (req, res) => {
    res.json(usuarios);
});

// Ruta para crear un nuevo usuario
app.post('/api/usuarios', (req, res) => {
    const nuevoUsuario = {
        id: usuarios.length + 1, // Generar un ID automáticamente
        ...req.body
    };
    usuarios.push(nuevoUsuario); // Agregar a la lista en memoria
    res.status(201).json({ mensaje: 'Usuario creado', usuario: nuevoUsuario });
});

// Servidor en ejecución
app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});

const express = require("express");
const app = express();

app.use(express.json()); // Middleware para leer JSON

// Lista de usuarios simulada
const usuarios = [
    { id: 1, nombre: "Juan" },
    { id: 2, nombre: "Maria" }
];

// Ruta para obtener todos los usuarios
app.get("/usuarios", (req, res) => {
    res.json(usuarios);
});

// Ruta con parámetros para obtener un usuario por ID
app.get("/usuarios/:id", (req, res) => {
    const usuario = usuarios.find(u => u.id === parseInt(req.params.id));

    if (!usuario) {
        return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }

    res.json(usuario);
});

// Iniciar el servidor
app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});
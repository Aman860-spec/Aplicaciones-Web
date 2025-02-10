const express = require("express");
const app = express();

app.use(express.json()); // Middleware para leer JSON

// Ruta principal (Home)
app.get("/", (req, res) => {
    res.send("¡Bienvenido a mi servidor en Node.js!");
});

// Ruta para obtener todos los usuarios (GET)
app.get("/usuarios", (req, res) => {
    res.json([
        { id: 1, nombre: "Juan" },
        { id: 2, nombre: "Maria" }
    ]);
});

// Ruta para agregar un usuario (POST)
app.post("/usuarios", (req, res) => {
    const nuevoUsuario = req.body;
    res.json({ mensaje: "Usuario agregado", usuario: nuevoUsuario });
});

// Ruta con parámetros (obtener un usuario por ID)
app.get("/usuarios/:id", (req, res) => {
    res.json({ id: req.params.id, nombre: "Ejemplo" });
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});
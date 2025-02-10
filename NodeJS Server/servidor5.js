const express = require('express');
const app = express();
const port = 3000;

// Ruta de inicio
app.get('/', (req, res) => {
    res.send(`
        <h1>Inicio</h1>
        <p>Bienvenido a la página de inicio.</p>
    `);
});

// Ruta "Acerca de"
app.get('/about', (req, res) => {
    res.send(`
        <h1>Acerca de</h1>
        <p>Esta es la página "Acerca de".</p>
    `);
});

// Manejo de errores 404
app.use((req, res) => {
    res.status(404).send(`
        <h1>404 - Página no encontrada</h1>
        <p>Lo sentimos, la página que buscas no existe.</p>
    `);
});

// Inicia el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}/`);
});
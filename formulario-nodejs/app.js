const express = require('express');
const app = express();
const port = 3000;

// Configurar EJS como motor de plantillas
app.set('view engine', 'ejs');
app.set('views', './views');

// Middleware para parsear el cuerpo de las solicitudes
app.use(express.urlencoded({ extended: true }));

// Ruta para mostrar el formulario
app.get('/', (req, res) => {
    res.render('index');
});

// Ruta para manejar el envío del formulario
app.post('/submit', (req, res) => {
    const { nombre, email } = req.body;
    res.render('resultado', { nombre, email });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
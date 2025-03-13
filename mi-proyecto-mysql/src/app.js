const express = require('express');
const bodyParser = require('body-parser');
const formRoutes = require('./routes/formRoutes');

const app = express();
const port = 3000;
// test
// Middleware para parsear el cuerpo de las solicitudes
app.use(bodyParser.urlencoded({ extended: true }));

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static('public'));

// Usar las rutas definidas en formRoutes.js
app.use('/', formRoutes);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

// Importa el módulo HTTP de Node.js
const http = require('http');
// Crea un servidor HTTP
const server = http.createServer((req, res) => {
    // Configura el código de estado y el tipo de contenido
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    // Envía una respuesta HTML
    res.end(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Mi Página Web</title>
        </head>
        <body>
            <h1>¡Hola, Mundo!</h1>
            <p>Esta es mi primera página web con Node.js.</p>
        </body>
        </html>
    `);
});
// Define el puerto en el que escuchará el servidor
const port = 3000;
// Inicia el servidor
server.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}/`);
});
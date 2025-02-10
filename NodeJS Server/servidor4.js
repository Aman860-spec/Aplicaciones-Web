const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    // Manejo de rutas
    if (req.url === '/') {
        res.end(`
            <h1>Inicio</h1>
            <p>Bienvenido a la página de inicio.</p>
        `);
    } else if (req.url === '/about') {
        res.end(`
            <h1>Acerca de</h1>
            <p>Esta es la página "Acerca de".</p>
        `);
    } else {
        res.statusCode = 404;
        res.end(`
            <h1>404 - Página no encontrada</h1>
            <p>Lo sentimos, la página que buscas no existe.</p>
        `);
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}/`);
});
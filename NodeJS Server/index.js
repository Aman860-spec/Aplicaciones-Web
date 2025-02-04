const https = require('https');
const fs = require('fs');
 
const options = {
  key: fs.readFileSync('key.pem'),  // Clave privada
  cert: fs.readFileSync('cert.pem') // Certificado
};
 
https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('Conexion segura establecida');
}).listen(8443, () => {
  console.log('Servidor HTTPS ejecutándose en https://localhost:8443');
});
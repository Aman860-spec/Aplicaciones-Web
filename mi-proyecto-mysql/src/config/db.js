const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',      // Dirección del servidor MySQL
  user: 'root',           // Usuario de MySQL
  password: 'Root123_', // Contraseña de MySQL
  database: 'form_node' // Nombre de la base de datos
});

connection.connect((err) => {
  if (err) {
    console.error('Error conectando a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos MySQL');
});

module.exports = connection;
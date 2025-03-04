const connection = require('../config/db');

exports.enviarFormulario = (req, res) => {
  const { nombre, email, mensaje } = req.body;

  const query = 'INSERT INTO formulario (nombre, email, mensaje) VALUES (?, ?, ?)';
  connection.query(query, [nombre, email, mensaje], (err, results) => {
    if (err) {
      console.error('Error insertando datos:', err);
      res.status(500).send('Error al guardar los datos');
      return;
    }
    res.send('Datos guardados correctamente');
  });
};
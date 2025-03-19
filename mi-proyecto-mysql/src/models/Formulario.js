const connection = require('../config/db');

class Formulario {
  // Crear un nuevo registro
  static crear(nombre, email, mensaje, callback) {
    const query = 'INSERT INTO formulario (nombre, email, mensaje) VALUES (?, ?, ?)';
    connection.query(query, [nombre, email, mensaje], callback);
  }

  // Leer todos los registros
  static leerTodos(callback) {
    const query = 'SELECT * FROM formulario';
    connection.query(query, callback);
  }

  // Leer un registro por ID
  static leerPorId(id, callback) {
    const query = 'SELECT * FROM formulario WHERE id = ?';
    connection.query(query, [id], callback);
  }

  // Actualizar un registro
  static actualizar(id, nombre, email, mensaje, callback) {
    const query = 'UPDATE formulario SET nombre = ?, email = ?, mensaje = ? WHERE id = ?';
    connection.query(query, [nombre, email, mensaje, id], callback);
  }

  // Eliminar un registro
  static eliminar(id, callback) {
    const query = 'DELETE FROM formulario WHERE id = ?';
    connection.query(query, [id], callback);
  }
}

module.exports = Formulario; // Exporta la clase Formulario
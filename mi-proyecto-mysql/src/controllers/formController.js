const Formulario = require('../models/Formulario');

exports.crearFormulario = (req, res) => {
  const { nombre, email, mensaje } = req.body;
  Formulario.crear(nombre, email, mensaje, (err, results) => {
    if (err) {
      console.error('Error creando el registro:', err);
      res.status(500).send('Error al crear el registro');
      return;
    }
    res.status(201).send('Registro creado correctamente');
  });
};

exports.leerFormularios = (req, res) => {
  Formulario.leerTodos((err, results) => {
    if (err) {
      console.error('Error leyendo los registros:', err);
      res.status(500).send('Error al leer los registros');
      return;
    }
    res.status(200).json(results);
  });
};

exports.leerFormularioPorId = (req, res) => {
  const { id } = req.params;
  Formulario.leerPorId(id, (err, results) => {
    if (err) {
      console.error('Error leyendo el registro:', err);
      res.status(500).send('Error al leer el registro');
      return;
    }
    if (results.length === 0) {
      res.status(404).send('Registro no encontrado');
      return;
    }
    res.status(200).json(results[0]);
  });
};

exports.actualizarFormulario = (req, res) => {
  const { id } = req.params;
  const { nombre, email, mensaje } = req.body;
  Formulario.actualizar(id, nombre, email, mensaje, (err, results) => {
    if (err) {
      console.error('Error actualizando el registro:', err);
      res.status(500).send('Error al actualizar el registro');
      return;
    }
    res.status(200).send('Registro actualizado correctamente');
  });
};

exports.eliminarFormulario = (req, res) => {
  const { id } = req.params;
  Formulario.eliminar(id, (err, results) => {
    if (err) {
      console.error('Error eliminando el registro:', err);
      res.status(500).send('Error al eliminar el registro');
      return;
    }
    res.status(200).send('Registro eliminado correctamente');
  });
};
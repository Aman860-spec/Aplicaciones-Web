const express = require('express');
const formController = require('../controllers/formController');

const router = express.Router();

// Ruta para manejar el CRUD
router.post('/formularios', formController.crearFormulario); //crear
router.get('/formularios', formController.leerFormularios); // leer todos
router.get('/formularios/:id', formController.leerFormularioPorId); //lee uno
router.put('/formularios/:id', formController.eliminarFormulario); //eliminar


module.exports = router;
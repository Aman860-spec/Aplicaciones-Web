const express = require('express');
const formController = require('../controllers/formController');

const router = express.Router();

// Ruta para manejar el envío del formulario
router.post('/enviar-formulario', formController.enviarFormulario);

module.exports = router;
const express = require('express');
const router = express.Router();

const productoController = require('../controllers/productoController');

router.get('/', productoController.list); // Aquí list debe ser función

module.exports = router;
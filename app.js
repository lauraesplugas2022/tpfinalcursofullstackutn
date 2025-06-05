const express = require('express');
const app = express();
const path = require('path');
const productosRoutes = require('./routes/productos');

// Configuración del motor de vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para leer datos del formulario
app.use(express.urlencoded({ extended: true }));

// Archivos estáticos (CSS, imágenes, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Redirección al inicio
app.get('/', (req, res) => {
  res.redirect('/productos');
});

// Rutas de productos
app.use('/productos', productosRoutes);

// Inicio del servidor
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});


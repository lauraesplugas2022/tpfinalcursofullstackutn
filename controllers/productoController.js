const fs = require('fs');
const path = require('path');

const productosFilePath = path.join(__dirname, '../models/productos.json');

function list(req, res) {
  const productosJSON = fs.readFileSync(productosFilePath, 'utf-8');
  const productos = JSON.parse(productosJSON);
  
  // Importante: enviamos 'productos' a la vista
  res.render('productos', { productos }); 
}

module.exports = {
  list
};


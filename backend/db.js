// db.js
const mysql = require('mysql2');

// Configuración de la conexión a MySQL
const connection = mysql.createConnection({
  host: 'mysql8003.site4now.net' , // XAMPP por defecto usa localhost
  user: 'aae7ee_gestion' ,      // El usuario predeterminado de MySQL en XAMPP
  password: 'Proyecto2024' ,     // Sin contraseña por defecto
  database: 'db_aae7ee_gestion' , // Nombre de la base de datos que creaste
});

// Probar conexión a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error conectando a la base de datos: ', err);
    return;
  }
  console.log('Conectado a la base de datos MySQL.');
});

module.exports = connection;

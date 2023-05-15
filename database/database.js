// DATABASE
// importamos modulo de mysql
const mysql = require('mysql');

const db_connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'examen'
});

db_connection.getConnection(err => {
  if (err) throw err;
  console.log("Conexion a la DB correcta!");
});

module.exports = db_connection;
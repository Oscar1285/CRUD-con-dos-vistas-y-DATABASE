const Router = require("express");
const router = new Router();
const db_connection = require('../database/database.js');

// rutas
// GET 
router.get('/', (req, res) => {
  res.render('insertDato');
});

// cRud
router.get('/datos', (req, res) => {
  const sql = 'select * from datos';
  db_connection.query(sql, (err, results) => {
    if (err) {
      res.status(500).json("Error en servidor. Inténtelo más tarde");
      throw err;
    }
    res.render('leerBorrarActDato', {
      "response": results
    });
  });
});

// Crud
// POST
router.post('/insertarDato', (req, res) => {
  const dato = req.body.dato;
  if (dato === undefined) {
    res.status(500).json("Error en recepción de dato. Dato: undefined");
  } else {
    // validar
    if (dato.length === 0) {
      res.json("Introduce un dato, SERVER!!")
    } else {
      // database
      const sql = `insert into datos values (default, '${dato}')`;
      db_connection.query(sql, (err) => {
        if (err) {
          res.status(500).json("Error en servidor. Inténtelo más tarde");
          throw err;
        }
        res.json("Dato insertado correctamente!");
      });
    }
  }
});

// cruD
router.delete('/borrarDato', (req, res) => {
  const id = req.body.id;
  const sql = "delete from datos where id = " + id;
  db_connection.query(sql, (err) => {
    if (err) {
      res.status(500).json("Error en servidor. Inténtelo más tarde");
      throw err;
    }
    res.json("Dato borrado correctamente!");
  });
});

// crUd
router.put('/actualizarDato', (req, res) => {
  const id = req.body.id;
  const dato = req.body.dato;
  const sql = `update datos set dato="${dato}" where id=${id};`;
  db_connection.query(sql, (err) => {
    if (err) {
      res.status(500).json("Error en servidor. Inténtelo más tarde");
      throw err;
    }
    res.json("Dato actualizado correctamente!");
  });
});

module.exports = router;
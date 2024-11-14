const { Router } = require("express");
const DBConnection = require('../config/dbConnection');
const verificarPermiso = require('../middlewares/verificarPermiso');
const router = Router();

router.get('/', verificarPermiso('Modulo Usuarios', 'Consultar Modulos'), async (req, res) => {
  const db = new DBConnection();
  try {
    await db.connect();
    const getModules = await db.query(`SELECT * FROM modulos`);
    if (Object.keys(getModules).length != 0) {
        res.json({ message: "Method Get : Successful Query", data: getModules, status: 200});
    } else {
      res.json({ message: "Method Get ", data: '', status: 404 });
    }
  } catch (err) {
    res.json({ message: "Error Get ", data: err.message,status: 404 });
  } finally {
    // Close the connection
    await db.close();
  }
});

router.get('/:id', verificarPermiso('Modulo Usuarios', 'Consultar Modulo ID'), async (req, res) => {
  const db = new DBConnection();
  try {
    await db.connect();
    const getModule = await db.query(`SELECT * FROM modulos WHERE id=${req.params.id}`);
    if (Object.keys(getModule).length != 0) {
        res.json({ message: "Method Get : Successful Query", data: getModule, status: 200});
    } else {
      res.json({ message: "Method Get ", data: '', status: 404 });
    }
  } catch (err) {
    res.json({ message: "Error Get ", data: err.message ,status: 404});
  } finally {
    // Close the connection
    await db.close();
  }
})

router.post('/', verificarPermiso('Modulo Usuarios', 'Crear Modulo'), async (req, res) => {
  const db = new DBConnection();
  try {
    await db.connect();
    var dataQry = [req.body.nombre];
    var qry = `INSERT INTO modulos (nombre) VALUES(?);`;
    const results = await db.query(qry, dataQry);
    if (Object.keys(results).length != 0) {
      res.json({ message: "Method Post ", data: 'ok', status: 200 });
    } else {
      res.json({ message: "Method Post ", data: 'error', status: 404 });
    }
  } catch (err) {
    res.json({ message: "Error Post ", data: err.message,status: 404 });
  } finally {
    // Close the connection
    await db.close();
  }
})

router.put('/:id', verificarPermiso('Modulo Usuarios', 'Actualizar Modulo'), async (req, res) => {
  const db = new DBConnection();
  try {
    await db.connect();
    const getModule = await db.query(`SELECT * FROM modulos WHERE id=${req.params.id}`);
    if (Object.keys(getModule).length != 0) {
      var dataQry = [req.body.nombre];
      var qry = `UPDATE modulos SET nombre=? WHERE id=${req.params.id};`;
      // Execute a query
      const results = await db.query(qry, dataQry);
      if (Object.keys(results).length != 0) {
        res.json({ message: "Method Put ", data: 'ok', status: 200 });
      } else {
        res.json({ message: "Method Put ", data: 'error', status: 404 });
      }
    } else {
      res.json({ message: "module not create", data: 'error', status: 404 });
    }
  } catch (err) {
    res.json({ message: "Error Post ", data: err.message,status: 404 });
  } finally {
    // Close the connection
    await db.close();
  }
})


router.delete('/:id', verificarPermiso('Modulo Usuarios', 'Eliminar Modulo'), async (req, res) => {
  const db = new DBConnection();
  try {
    await db.connect();
    const getModule = await db.query(`SELECT * FROM modulos WHERE id=${req.params.id}`);
    if (Object.keys(getModule).length != 0) {
      var qry = `DELETE FROM modulos WHERE id=${req.params.id};`;
      // Execute a query
      const results = await db.query(qry);
      if (Object.keys(results).length != 0) {
        res.json({ message: "Method Delete ", data: 'ok', status: 200 });
      } else {
        res.json({ message: "Method Delete ", data: 'error', status: 404 });
      }
    } else {
      res.json({ message: "Module not Delete", data: 'error', status: 404 });
    }
  } catch (err) {
    res.json({ message: "Error Delete ", data: err.message,status: 404 });
  } finally {
    // Close the connection
    await db.close();
  }
})

module.exports = router;
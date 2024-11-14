const { Router } = require("express");
const DBConnection = require('../config/dbConnection');
const verificarPermiso = require('../middlewares/verificarPermiso');
const router = Router();

router.get('/', verificarPermiso('Modulo Usuarios', 'Consultar Roles'), async (req, res) => {
  const db = new DBConnection();
  try {
    await db.connect();
    const getRoles = await db.query(`SELECT * FROM roles`);
    if (Object.keys(getRoles).length != 0) {
        res.json({ message: "Method Get : Successful Query", data: getRoles, status: 200});
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

router.get('/:id', verificarPermiso('Modulo Usuarios', 'Consultar Rol ID'), async (req, res) => {
  const db = new DBConnection();
  try {
    await db.connect();
    const getModule = await db.query(`SELECT * FROM roles WHERE id=${req.params.id}`);
    if (Object.keys(getModule).length != 0) {
        res.json({ message: "Method Get : Successful Query", data: getModule, status: 200});
    } else {
      res.json({ message: "Method Get ", data: '', status: 404 });
    }
  } catch (err) {
    res.json({ message: "Error Get ", data: err.message,status: 404 });
  } finally {
    // Close the connection
    await db.close();
  }
})

router.post('/', verificarPermiso('Modulo Usuarios', 'Crear Rol'), async (req, res) => {
  const db = new DBConnection();
  try {
    await db.connect();
    var dataQry = [req.body.nombre, req.body.descripcion];    
    var qry = `INSERT INTO roles(nombre, descripcion) VALUES(?,?);`;
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

router.put('/:id', verificarPermiso('Modulo Usuarios', 'Actualizar Rol'), async (req, res) => {
  const db = new DBConnection();
  try {
    await db.connect();
    const getModule = await db.query(`SELECT * FROM roles WHERE id=${req.params.id}`);
    if (Object.keys(getModule).length != 0) {
      var dataQry = [req.body.nombre, req.body.descripcion];
      var qry = `UPDATE roles SET nombre=?, descripcion=? WHERE id=${req.params.id};`;
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


router.delete('/:id', verificarPermiso('Modulo Usuarios', 'Eliminar Rol'), async (req, res) => {
  const db = new DBConnection();
  try {
    await db.connect();
    const getRole = await db.query(`SELECT * FROM roles WHERE id=${req.params.id}`);
    if (Object.keys(getRole).length != 0) {
      var qry = `DELETE FROM roles WHERE id=${req.params.id};`;
      // Execute a query
      const results = await db.query(qry);
      if (Object.keys(results).length != 0) {
        res.json({ message: "Method Delete ", data: 'ok', status: 200 });
      } else {
        res.json({ message: "Method Delete ", data: 'error', status: 404 });
      }
    } else {
      res.json({ message: "module not Delete", data: 'error', status: 404 });
    }
  } catch (err) {
    res.json({ message: "Error Delete ", data: err.message,status: 404 });
  } finally {
    // Close the connection
    await db.close();
  }
})

module.exports = router;
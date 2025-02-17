/* Este fragmento de código importa los módulos necesarios y establece las configuraciones iniciales 
para el controlador de ruta. A continuación, se muestra un desglose: */
const { Router } = require("express");
const DBConnection = require('../config/dbConnection');
const router = Router();

/* Este bloque de código específico define una ruta que maneja una solicitud GET para recuperar todos los 
registros de la tabla "usuario" en la base de datos. A continuación, se muestra un desglose de lo que hace 
el código:*/
router.get('/', async (req, res) => {
  const db = new DBConnection();
  try {
    await db.connect();
    // Execute a query
    const results = await db.query(`SELECT * FROM racetype`);
    if (Object.keys(results).length != 0) {
      res.json({ message: "Method Get", data: results, status: 200 });
    } else {
      res.json({ message: "there are no records", data: results, status: 404 });
    }
  } catch (err) {
    res.json({ message: "Error Get", data: err.message, status: 404 });
  } finally {
    // Close the connection
    await db.close();
  }
});

/* Este bloque de código específico define una ruta que maneja una solicitud GET con un parámetro dinámico 
`:id`. Cuando se realiza una solicitud GET a esta ruta con un ID de usuario específico proporcionado en la 
URL, el código intenta recuperar información sobre ese usuario en particular de la base de datos. */
router.get('/:id', async (req, res) => {
  const db = new DBConnection();
  try {
    await db.connect();
    // Execute a query
    const getUser = await db.query(`SELECT * FROM racetype WHERE raceTypeID=${req.params.id}`);
    if (Object.keys(getUser).length != 0) {
      res.json({ message: "Method Get Id", data: getUser, status: 200 });
    } else {
      res.json({ message: "Unregistered user", data: getUser, status: 404 });
    }
  } catch (err) {
    res.json({ message: "Error Get Id", data: err.message, status: 404 });
  } finally {
    // Close the connection
    await db.close();
  }
})

/* La función `router.post('/', async (req, res) => { ... }` está manejando una solicitud POST para insertar 
un nuevo registro de usuario en la base de datos. Aquí hay un desglose de lo que hace el código: */
router.post('/', async (req, res) => {
  const db = new DBConnection();
  try {
    var dataQry = [req.body.raceName, req.body.abilities];
    var qry = `INSERT INTO racetype (raceName, abilities) VALUES(?,?);`;
    await db.connect();
    // Execute a query
    const results = await db.query(qry, dataQry);
    if (Object.keys(results).length != 0) {
      res.json({ message: "Method Post ", data: 'ok', status: 200 });
    } else {
      res.json({ message: "Method Post ", data: 'error', status: 404 });
    }
  } catch (err) {
    res.json({ message: "Error Post ", data: err.message, status: 404 });
  } finally {
    // Close the connection
    await db.close();
  }
})

/* La función `router.put('/:id', async (req, res) => { ... }` maneja una solicitud PUT para actualizar la 
información de un usuario específico en función del ID de usuario proporcionado en el parámetro URL. 
A continuación, se muestra un desglose de lo que hace el código:*/
router.put('/:id', async (req, res) => {
  const db = new DBConnection();
  try {
    
    await db.connect();
    const getUser = await db.query(`SELECT * FROM racetype WHERE raceTypeID=${req.params.id}`);
    if (Object.keys(getUser).length != 0) {
      var dataQry = [req.body.raceName, req.body.abilities];
      var qry = `UPDATE racetype SET raceName=?, abilities=? WHERE raceTypeID=${req.params.id};`;
      // Execute a query
      const results = await db.query(qry, dataQry);

      if (Object.keys(results).length != 0) {
        res.json({ message: "Method Put", data: "ok", status: 200 });
      }else{
        res.json({ message: "Error Put", data: "error", status: 404 });
      }
    } else {
      res.json({ message: "Unregistered user", data: results, status: 404 });
    }
  } catch (err) {
    res.json({ message: "Error Put", data: err.message, status: 404 });
  } finally {
    // Close the connection
    await db.close();
  }
})

/* Esta parte del código define una ruta para manejar solicitudes DELETE para eliminar un usuario específico
según su ID. A continuación, se muestra un desglose de lo que hace el código: */
router.delete('/:id', async (req, res) => {
  const db = new DBConnection();
  try {
    await db.connect();
    const getUser = await db.query(`SELECT * FROM racetype WHERE raceTypeID=${req.params.id}`);
    if (Object.keys(getUser).length != 0) {
      var qry = `DELETE FROM racetype WHERE raceTypeID=${req.params.id};`;
      // Execute a query
      const results = await db.query(qry);
      if (Object.keys(results).length != 0) {
        res.json({ message: "Method Delete ", data: 'ok', status: 200 });
      } else {
        res.json({ message: "Method Delete ", data: 'error', status: 404 });
      }
    } else {
      res.json({ message: "user not Delete", data: 'error', status: 404 });
    }
  } catch (err) {
    res.json({ message: "Error Delete ", data: err.message });
  } finally {
    // Close the connection
    await db.close();
  }
})

module.exports = router;
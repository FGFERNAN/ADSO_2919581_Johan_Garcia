const { Router } = require("express");
const DBConnection = require('../config/dbConnection');
const router = Router();

router.get('/', async (req, res) => {
  const db = new DBConnection();
  try {
    await db.connect();
    const getRoles = await db.query(`SELECT * FROM role`);
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

router.get('/:id', async (req, res) => {
  const db = new DBConnection();
  try {
    await db.connect();
    const getModule = await db.query(`SELECT * FROM role WHERE role_id=${req.params.id}`);
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

router.post('/', async (req, res) => {
  const db = new DBConnection();
  try {
    await db.connect();
    var dataQry = [req.body.role_name];    
    var qry = `INSERT INTO role(role_name) VALUES(?);`;
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

router.put('/:id', async (req, res) => {
  const db = new DBConnection();
  try {
    await db.connect();
    const getModule = await db.query(`SELECT * FROM role WHERE role_id=${req.params.id}`);
    if (Object.keys(getModule).length != 0) {
      var dataQry = [req.body.role_name];
      var qry = `UPDATE role SET role_name=? WHERE role_id=${req.params.id};`;
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


router.delete('/:id', async (req, res) => {
  const db = new DBConnection();
  try {
    await db.connect();
    const getRole = await db.query(`SELECT * FROM role WHERE role_id=${req.params.id}`);
    if (Object.keys(getRole).length != 0) {
      var qry = `DELETE from role WHERE role_id=${req.params.id};`;
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
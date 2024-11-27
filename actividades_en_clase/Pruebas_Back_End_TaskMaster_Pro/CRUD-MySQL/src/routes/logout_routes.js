const { Router } = require("express");
const LoginController = require('../controllers/loginController');
const router = Router();

router.post('/', LoginController.logout);

module.exports = router;
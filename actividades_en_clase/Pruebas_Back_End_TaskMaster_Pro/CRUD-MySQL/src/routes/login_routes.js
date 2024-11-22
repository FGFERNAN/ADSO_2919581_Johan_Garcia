/* El fragmento de código importa los módulos necesarios y configura las variables para el administrador 
del controlador de ruta para los datos de inicio de sesión del usuario. A continuación, se muestra un 
desglose: */
const { Router } = require("express");
const LoginController = require('../controllers/loginController');
const router = Router();

/* Este fragmento de código define un controlador de ruta POST mediante Express.js. A continuación, 
se muestra un desglose de lo que hace: */
router.post('/', LoginController.login);

module.exports = router;
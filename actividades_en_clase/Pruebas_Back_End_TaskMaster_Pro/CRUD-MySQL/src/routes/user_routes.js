/* Este fragmento de código importa los módulos necesarios y establece las configuraciones iniciales 
para el controlador de ruta. A continuación, se muestra un desglose: */
const { Router } = require("express");
const verificarPermiso = require('../middlewares/verificarPermiso');
const UserController = require("../controllers/userController");
const router = Router();

/* Este bloque de código específico define una ruta que maneja una solicitud GET para recuperar todos los 
registros de la tabla "usuario" en la base de datos. A continuación, se muestra un desglose de lo que hace 
el código:*/
router.get('/', UserController.getAllUsers);


/* Este bloque de código específico define una ruta que maneja una solicitud GET con un parámetro dinámico 
`:id`. Cuando se realiza una solicitud GET a esta ruta con un ID de usuario específico proporcionado en la 
URL, el código intenta recuperar información sobre ese usuario en particular de la base de datos. */
router.get('/:id', verificarPermiso('Modulo Usuarios', 'Consultar Usuario ID'), UserController.getUserById);


/* La función `router.post('/', async (req, res) => { ... }` está manejando una solicitud POST para insertar 
un nuevo registro de usuario en la base de datos. Aquí hay un desglose de lo que hace el código: */
router.post('/', verificarPermiso('Modulo Usuarios', 'Crear Usuario'), UserController.createUser);


/* La función `router.put('/:id', async (req, res) => { ... }` maneja una solicitud PUT para actualizar la 
información de un usuario específico en función del ID de usuario proporcionado en el parámetro URL. 
A continuación, se muestra un desglose de lo que hace el código:*/
router.put('/:id', verificarPermiso('Modulo Usuarios', 'Actualizar Usuario'), UserController.updateUser);


/* Esta parte del código define una ruta para manejar solicitudes DELETE para eliminar un usuario específico
según su ID. A continuación, se muestra un desglose de lo que hace el código: */
router.delete('/:id', verificarPermiso('Modulo Usuarios', 'Eliminar Usuario'), UserController.deleteUser);

module.exports = router;
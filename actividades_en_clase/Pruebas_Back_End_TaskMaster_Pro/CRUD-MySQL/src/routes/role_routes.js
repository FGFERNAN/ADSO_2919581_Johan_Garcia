const { Router } = require("express");
const verificarPermiso = require('../middlewares/verificarPermiso');
const RoleController = require('../controllers/roleController');
const router = Router();

router.get('/', verificarPermiso('Modulo Usuarios', 'Consultar Roles'), RoleController.getAllRoles);

router.get('/:id', verificarPermiso('Modulo Usuarios', 'Consultar Rol ID'), RoleController.getRoleById);

router.post('/', verificarPermiso('Modulo Usuarios', 'Crear Rol'), RoleController.createRole);

router.put('/:id', verificarPermiso('Modulo Usuarios', 'Actualizar Rol'), RoleController.updateRole);

router.delete('/:id', verificarPermiso('Modulo Usuarios', 'Eliminar Rol'), RoleController.deleteRole);

module.exports = router;
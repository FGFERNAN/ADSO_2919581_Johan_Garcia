const { Router } = require("express");
const ModuleController = require('../controllers/moduleController');
const verificarPermiso = require('../middlewares/verificarPermiso');
const router = Router();

router.get('/', verificarPermiso('Modulo Usuarios', 'Consultar Modulos'), ModuleController.getAllModules);

router.get('/:id', verificarPermiso('Modulo Usuarios', 'Consultar Modulo ID'), ModuleController.getModuleById);

router.post('/', verificarPermiso('Modulo Usuarios', 'Crear Modulo'), ModuleController.createModule);

router.put('/:id', verificarPermiso('Modulo Usuarios', 'Actualizar Modulo'), ModuleController.updateModule);


router.delete('/:id', verificarPermiso('Modulo Usuarios', 'Eliminar Modulo'), ModuleController.deleteModule);

module.exports = router;
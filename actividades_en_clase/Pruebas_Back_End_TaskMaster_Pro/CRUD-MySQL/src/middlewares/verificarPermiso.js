const DBConnection = require('../config/dbConnection');

const verificarPermiso = (modulo, accion) => {
    return async (req, res, next) => {
        const db = new DBConnection();
        try {
            await db.connect();
            
            const usuarioId = req.params.id; 
            
            // Obtener el rol del usuario
            const getUserRole = await db.query(`SELECT rolID FROM usuarios WHERE id = ?`, [usuarioId]);
            if (!getUserRole.length) {
                return res.status(403).json({ mensaje: "Usuario no encontrado" });
            }

            const rolId = getUserRole[0].rolID;

            // Consultar si el rol tiene el permiso en el módulo y acción específicos
            const permiso = await db.query(`
                SELECT permisos.id FROM permisos
                JOIN modulos ON permisos.moduloID = modulos.id
                JOIN acciones ON permisos.accionesID = acciones.id
                WHERE permisos.rolID = ? AND modulos.nombre = ? AND acciones.nombre = ?`,
                [rolId, modulo, accion]
            );

            if (!permiso.length) {
                return res.status(403).json({ mensaje: "No tienes permisos para realizar esta acción." });
            }

            next(); // El usuario tiene permiso, proceder al siguiente middleware o controlador
        } catch (error) {
            console.error(error);
            res.status(500).json({ mensaje: "Error en la verificación de permisos" });
        } finally {
            await db.close();
        }
    };
};

module.exports = verificarPermiso;
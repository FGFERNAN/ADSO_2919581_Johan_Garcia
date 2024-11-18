const DBConnection = require('../config/dbConnection');

const verificarPermiso = (modulo, accion) => {
    return async (req, res, next) => {
        const db = new DBConnection();
        try {
            await db.connect();
            
            req.user = { id: 1030533364 }; // Cambia el valor de "id" por el id del usuario que quieres probar segun su rol que tre sus repectivos permisos
            
            const usuarioId = req.user.id;

            if(!modulo || !accion){
                return res.status(400).json({ mensaje: "Parametros invalidos"});
            };
            
            // Obtener el rol del usuario
            const getUserRole = await db.query(`SELECT rolID FROM usuarios WHERE id = ?`, [usuarioId]);
            if (!getUserRole.length) {
                return res.status(403).json({ mensaje: "Usuario no encontrado" });
            }

            const rolId = getUserRole[0].rolID;

            const procedure = 'CALL consultarPermisos(?,?,?)';

            // Consultar si el rol tiene el permiso en el módulo y acción específicos
            const permiso = await db.query(procedure, [rolId, modulo, accion]
            ); 

            if (!permiso[0].length) {
                return res.status(403).json({ mensaje: "No tienes permisos para realizar esta acción." });
            }

            next(); // El usuario tiene permiso, proceder al siguiente middleware o controlador
        } catch (error) {
            console.error("Error en el middlaware verificarPermisos: ",error.message);
            res.status(500).json({ mensaje: "Error en la verificación de permisos" });
        } finally {
            await db.close();
        }
    };
};

module.exports = verificarPermiso;

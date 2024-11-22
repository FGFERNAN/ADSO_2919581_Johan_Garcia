const DBConnection = require('../config/dbConnection');
const Module = require('../models/module');

class ModuleService{
    constructor(){
        this.db = new DBConnection();
    }

    async getAllModules(){
        try {
            const results = await this.db.query(`SELECT * FROM modulos`);
            return results.map(module => new Module(...Object.values(module)));
        } catch (err) {
            console.error('Error fetching modules: ', err.message);
            throw err;
        };
    }

    async getModuleById(id){
        try {
            const results = await this.db.query(`SELECT * FROM modulos WHERE id = ?`, [id]);
            if (results.length === 0) throw new Error("Modulo no encontrado");
            return new Module(...Object.values(results[0]));
        } catch(err) {
            console.error('Error fetching module: ', err.message);
            throw err;
        };
    }

    async createModule(data){
        try {
            var dataQry = [data.nombre]; 
            var qry = `INSERT INTO modulos (nombre) VALUES(?);`;
            const results = await this.db.query(qry, dataQry);
            if (results.length === 0) {
                throw new Error("Modulo no creado");
            }
            return { message: "Modulo creado con exito" };
            
        } catch(err) {
            console.error('Error creating module: ', err.message);
            throw err;
        };
    }

    async updateModule(id, data){
        try {
            const getModule = await this.db.query(`SELECT * FROM modulos WHERE id = ?`, [id]);
            if(getModule.length != 0){
                var dataQry = [data.nombre];
                const results = await this.db.query(`UPDATE modulos SET nombre=? WHERE id=?`, [...dataQry, id]);
                if(results.length != 0){
                    return { message: "Modulo actualizado con exito" };
                } else {
                    throw new Error("Modulo no actualizado");
                }
            } else {
                return { message: "Module not create" };
            }
            
        } catch(err) {
            console.error('Error updating module: ', err.message);
            throw err;
        };
    }

    async deleteModule(id){
        try {
            const getModule = await this.db.query(`SELECT * FROM modulos WHERE id  = ?`, [id]);
            if(getModule.length != 0){
                const results = await this.db.query(`DELETE FROM modulos WHERE id = ?`, [id]);
                if(results.length != 0){
                    return { message: "Modulo eliminado con exito"};
                } else {
                    throw new Error("Modulo no eliminado");
                }
            } else {
                return { message: "Module not exists"};
            }
        } catch(err) {
            console.error('Error deleting module: ', err.message);
            throw err;
        };
    }
}

module.exports = ModuleService;
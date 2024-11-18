const  DBConnection = require('../config/dbConnection');
const bcrypt = require('bcrypt');
const User = require('../models/user');

class UserService {
    constructor(){
        this.db = new DBConnection();
    }

    async getAllUsers() {
        try {
            await this.db.connect();
            const results = await this.db.query(`SELECT * FROM usuarios`);
            return results.map(user => new User(...Object.values(user)));
        } catch (err) {
            console.error('Error fetching users:', err.message);
        } finally {
            await this.db.close();
        }
    }
    
}

module.exports = UserService;
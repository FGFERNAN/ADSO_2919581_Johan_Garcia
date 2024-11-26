const DBConnection = require('../config/dbConnection');
const bcrypt = require('bcrypt');

class LoginService{
    constructor(){
        this.db = new DBConnection();
    }

    async login(data){
        try {
            const email = data.email;
            const password = data.password; 
            const getUser = await this.db.query(`SELECT * FROM usuarios WHERE email=?`, [email]);
            if (Object.keys(getUser).length != 0) {
                const isMatch = await bcrypt.compare(password, getUser[0].password);
                if(isMatch){
                    return { id: getUser[0].id, message: "Successful Entry" };
                } else {
                    throw new Error("Password Error");
                }
            } else {
                return { message: "The user not created" };
            };
        } catch(err) {
            console.error('Error logging: ', err.message);
            throw err;
        };
    };
}

module.exports = LoginService;
const UserService = require('../services/userService');

class UserController{
    constructor(){
        this.userService = new UserService();
    }

    async getAllUsers(req, res){
        try{
            const users = await this.userService.getAllUsers();
            res.json({ message: "Method Get", data: users, status: 200 });
        } catch(err){
            res.status(500).json({ message: err.message });
        }
    }
};

module.exports = new UserController();
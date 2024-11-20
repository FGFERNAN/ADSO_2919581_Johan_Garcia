const UserService = require('../services/userService');

class UserController{
    constructor(){
        this.userService = new UserService();
    }

    getAllUsers = async (req, res) => {
        try{
            const users = await this.userService.getAllUsers();
            res.json({ message: "Method Get", data: users, status: 200 });
        } catch(err){
            res.status(500).json({ message: err.message });
        }
    }

    getUserById = async (req, res) => {
        try {
            const user = await this.userService.getUserById(req.params.id);
            res.json({ message: "Method Get Id: User Found", data: user, status: 200 });
        } catch(err) {
            res.status(404).json({ message: err.message });
        }
    }

    createUser = async (req, res) => {
        try {
            const message = await this.userService.createUser(req.body);
            res.status(201).json(message);
        } catch(err) {
            res.status(500).json({ message: err.message });
        }
    }

    updateUser = async (req, res) => {
        try {
            const user = await this.userService.updateUser(req.params.id, req.body);
            res.status(200).json(user);
        } catch(err) {
            res.status(404).json({ message: err.message });
        }
    }

    deleteUser = async (req, res) => {
        try {
            const message = await this.userService.deleteUser(req.params.id);
            res.status(200).json(message);
        } catch(err){
            res.status(400).json({ message: err.message });
        }
    }
};

module.exports = new UserController();
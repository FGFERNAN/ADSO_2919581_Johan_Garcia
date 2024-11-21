const RoleService = require('../services/roleService');

class RoleController{
    constructor(){
        this.roleService = new RoleService();
    }

    getAllRoles = async (req, res) => {
        try{
            const roles = await this.roleService.getAllRoles();
            res.json({ message: "Method Get", data: roles, status: 200 });
        } catch(err){
            res.status(500).json({ message: err.message });
        }
    };

    getRoleById = async (req, res) => {
        try {
            const role = await this.roleService.getRoleById(req.params.id);
            res.json({ message: "Method Get Id: Role Found", data: role, status: 200 });
        } catch(err) {
            res.status(404).json({ message: err.message });
        }
    };

    createRole = async (req, res) => {
        try {
            const newRole = await this.roleService.createRole(req.body);
            res.status(201).json(newRole);
        } catch(err) {
            res.status(500).json({ message: err.message });
        }
    };

    updateRole = async (req, res) => {
        try {
            const role = await this.roleService.updateRole(req.params.id, req.body);
            res.status(200).json(role);
        } catch(err) {
            res.status(404).json({ message: err.message });
        }
    };

    deleteRole = async (req, res) => {
        try {
            const message = await this.roleService.deleteRole(req.params.id);
            res.status(200).json(message);
        } catch(err){
            res.status(400).json({ message: err.message });
        }
    };
};

module.exports = new RoleController();
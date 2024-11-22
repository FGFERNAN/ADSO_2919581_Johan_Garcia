const ModuleService = require('../services/moduleService');

class ModuleController{
    constructor(){
        this.moduleService = new ModuleService();
    }

    getAllModules = async (req,res) => {
        try{
            const modulos = await this.moduleService.getAllModules();
            res.json({ message: "Method Get", data: modulos, status: 200 });
        } catch(err){
            res.status(500).json({ message: err.message });
        };
    }

    getModuleById = async (req, res) => {
        try {
            const module = await this.moduleService.getModuleById(req.params.id);
            res.json({ message: "Method Get Id: Module Found", data: module, status: 200 });
        } catch(err) {
            res.status(404).json({ message: err.message });
        };
    }

    createModule = async (req, res) => {
        try {
            const newModule = await this.moduleService.createModule(req.body);
            res.status(201).json(newModule);
        } catch(err) {
            res.status(500).json({ message: err.message });
        };
    }

    updateModule = async (req, res) => {
        try {
            const module = await this.moduleService.updateModule(req.params.id, req.body);
            res.status(200).json(module);
        } catch(err) {
            res.status(404).json({ message: err.message });
        }
    };

    deleteModule= async (req, res) => {
        try {
            const message = await this.moduleService.deleteModule(req.params.id);
            res.status(200).json(message);
        } catch(err){
            res.status(400).json({ message: err.message });
        }
    };
}

module.exports = new ModuleController();
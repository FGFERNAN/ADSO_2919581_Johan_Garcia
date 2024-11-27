const LoginService = require('../services/loginService');

class LoginController{
    constructor(){
        this.loginService = new LoginService();
    }

    login = async (req, res) => {
        try { 
            const { email, password } = req.body;
            if (!email || !password) {
                return res.status(400).json({ message: "Email and password are required" });
            }  
            const user = await this.loginService.login(req.body);
            req.session.userId = user.id;
            res.status(200).json(user);
        } catch(err) {
            res.status(401).json({ message: err.message });
        };
    }

    logout = async (req, res) => {
        req.session.destroy((err) => {
            if (err) {
                return res.status(500).json({ message: "Error al cerrar sesión" });
            }
            res.clearCookie('connect.sid'); // Limpia la cookie de sesión
            return res.status(200).json({ message: "Sesión cerrada exitosamente" });
        });
    }
}

module.exports = new LoginController();
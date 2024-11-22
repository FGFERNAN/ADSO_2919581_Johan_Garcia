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
            res.status(200).json(user);
        } catch(err) {
            res.status(401).json({ message: err.message });
        };
    }
}

module.exports = new LoginController();
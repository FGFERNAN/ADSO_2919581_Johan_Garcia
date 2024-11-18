class User {
    constructor(id, nombre, apellidos, email, telefono, password, rolID, tipo_documento){
        this.id = id;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.email = email;
        this.telefono = telefono;
        this.password = password;
        this.rolID = rolID;
        this.tipo_documento = tipo_documento;
    }
}

module.exports = User;
CREATE DATABASE Task_Master;
USE Task_Master;

CREATE TABLE roles(
	id INT(10) UNSIGNED,
    nombre VARCHAR(155),
    descripcion TEXT,
    CONSTRAINT PK_roles
		PRIMARY KEY AUTO_INCREMENT(id)
);

ALTER TABLE roles
	CHANGE COLUMN id id INT(10) UNSIGNED AUTO_INCREMENT;
    
ALTER TABLE roles
	CHANGE COLUMN nombre nombre VARCHAR(155) NOT NULL;

CREATE TABLE modulos(
	id INT(10) UNSIGNED,
    nombre VARCHAR(100) NOT NULL,
    CONSTRAINT PK_modulos
		PRIMARY KEY AUTO_INCREMENT(id)
);

ALTER TABLE modulos
	CHANGE COLUMN id id INT(10) UNSIGNED AUTO_INCREMENT;

CREATE TABLE acciones(
	id INT(10) UNSIGNED,
    nombre VARCHAR(100) NOT NULL,
    CONSTRAINT PK_acciones
		PRIMARY KEY AUTO_INCREMENT(id)
);

ALTER TABLE acciones
	CHANGE COLUMN id id INT(10) UNSIGNED AUTO_INCREMENT;

CREATE TABLE permisos(
	id INT(10) UNSIGNED,
    rolID INT(10) UNSIGNED,
    moduloID INT(10) UNSIGNED,
    accionesID INT(10) UNSIGNED,
    CONSTRAINT PK_permisos
		PRIMARY KEY AUTO_INCREMENT(id)
);

ALTER TABLE permisos
	CHANGE COLUMN rolID rolID INT(10) UNSIGNED NOT NULL,
    CHANGE COLUMN moduloID moduloID INT(10) UNSIGNED NOT NULL,
    CHANGE COLUMN accionesID accionesID INT(10) UNSIGNED NOT NULL;

ALTER TABLE permisos
	CHANGE COLUMN id id INT(10) UNSIGNED AUTO_INCREMENT;

ALTER TABLE permisos
	ADD CONSTRAINT FK_permisos_rol
		FOREIGN KEY (rolID) REFERENCES roles(id);
        
ALTER TABLE permisos
	ADD CONSTRAINT FK_permisos_modulo
		FOREIGN KEY (moduloID) REFERENCES modulos(id);
        
ALTER TABLE permisos
	ADD CONSTRAINT FK_permisos_acciones
		FOREIGN KEY (accionesID) REFERENCES acciones(id);

CREATE TABLE etiquetas(
	id INT(10) UNSIGNED,
    nombre VARCHAR(100),
    color CHAR(7),
    CONSTRAINT PK_etiquetas
		PRIMARY KEY AUTO_INCREMENT(id)
);

ALTER TABLE etiquetas
	CHANGE COLUMN id id INT(10) UNSIGNED AUTO_INCREMENT;

CREATE TABLE proyectos(
	id INT(10) UNSIGNED,
    nombre VARCHAR(255),
    descripcion TEXT,
    fechaInicio DATE,
    fechaFin DATE,
    estado VARCHAR(50),
    prioridad VARCHAR(50),
    etiquetasID INT(10) UNSIGNED,
    CONSTRAINT PK_proyectos
		PRIMARY KEY AUTO_INCREMENT(id)
);

ALTER TABLE proyectos
	CHANGE COLUMN id id INT(10) UNSIGNED AUTO_INCREMENT;

ALTER TABLE proyectos
	ADD CONSTRAINT FK_proyectos_etiquetas
		FOREIGN KEY (etiquetasID) REFERENCES etiquetas(id);
        
CREATE TABLE campos_personalizados(
	id INT(10) UNSIGNED,
    nombre VARCHAR(100),
    tipo VARCHAR(50),
    valor VARCHAR(255),
    proyectosID INT(10) UNSIGNED,
    CONSTRAINT PK_campos
		PRIMARY KEY AUTO_INCREMENT(id)
);

ALTER TABLE campos_personalizados
	CHANGE COLUMN proyectosID proyectosID INT(10) UNSIGNED NOT NULL;

ALTER TABLE campos_personalizados
	CHANGE COLUMN id id INT(10) UNSIGNED AUTO_INCREMENT;

ALTER TABLE campos_personalizados
	ADD CONSTRAINT FK_campos_proyectos
		FOREIGN KEY (proyectosID) REFERENCES proyectos(id);

CREATE TABLE tipo_documento(
	id INT(10) UNSIGNED AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    CONSTRAINT PK_tipo_documento
    PRIMARY KEY(id)
);

ALTER TABLE tipo_documento
	CHANGE COLUMN id id TINYINT(3) UNSIGNED AUTO_INCREMENT;
        
CREATE TABLE usuarios(
	id INT(10) UNSIGNED,
    nombre VARCHAR(100),
    apellidos VARCHAR(155),
    email VARCHAR(200),
    telefono VARCHAR(20),
    password VARCHAR(30),
    rolID INT(10) UNSIGNED,
    CONSTRAINT PK_usuarios
    PRIMARY KEY(id)
);

ALTER TABLE usuarios
	CHANGE COLUMN password password VARCHAR(256);

ALTER TABLE usuarios
    CHANGE COLUMN password password VARCHAR(30) NOT NULL;

ALTER TABLE usuarios
	CHANGE COLUMN tipo_documento tipo_documento TINYINT(3) UNSIGNED NOT NULL;
    
ALTER TABLE usuarios
	ADD CONSTRAINT FK_usuarios_tipo_documento
		FOREIGN KEY(tipo_documento) REFERENCES tipo_documento(id);

ALTER TABLE usuarios 
	ADD CONSTRAINT FK_usuario_rol
		FOREIGN KEY (rolID) REFERENCES roles(id);
        
ALTER TABLE usuarios
	CHANGE COLUMN rolID rolID INT(10) UNSIGNED NOT NULL;
    
CREATE TABLE usuarios_proyectos(
	usuariosID INT(10) UNSIGNED NOT NULL,
    proyectosID INT(10) UNSIGNED NOT NULL,
    fechaInicio DATE,
    fechaFin DATE,
    estado BOOLEAN,
    CONSTRAINT PK_usuarios_proyectos
		PRIMARY KEY (usuariosID, proyectosID)
);

ALTER TABLE usuarios_proyectos
	ADD CONSTRAINT FK_usuariosP_usuarios
		FOREIGN KEY (usuariosID) REFERENCES usuarios(id);
        
ALTER TABLE usuarios_proyectos
	ADD CONSTRAINT FK_usuariosP_proyectos
		FOREIGN KEY (proyectosID) REFERENCES proyectos(id);

        
CREATE TABLE tareas(
	id INT(10) UNSIGNED,
    nombre VARCHAR(100),
    descripcion TEXT,
    fechaInicio DATE,
    fechaFin DATE,
    estado VARCHAR(50),
    prioridad VARCHAR(50),
    usuarioID INT(10) UNSIGNED,
    proyectoID INT(10) UNSIGNED,
    CONSTRAINT PK_tareas
    PRIMARY KEY AUTO_INCREMENT(id)
);

ALTER TABLE tareas
	CHANGE COLUMN usuarioID usuarioID INT(10) UNSIGNED NOT NULL,
    CHANGE COLUMN proyectoID proyectoID INT(10) UNSIGNED NOT NULL;

ALTER TABLE tareas
	CHANGE COLUMN id id INT(10) UNSIGNED AUTO_INCREMENT; 

ALTER TABLE tareas
	ADD CONSTRAINT FK_tarea_usuario
		FOREIGN KEY (usuarioID) REFERENCES usuarios(id);
        
ALTER TABLE tareas
	ADD CONSTRAINT FK_tarea_proyecto
		FOREIGN KEY (proyectoID) REFERENCES proyectos(id);
        
CREATE TABLE mensajes(
	id INT(10) UNSIGNED,
    contenido VARCHAR(255),
    fecha DATE,
    usuarioID INT(10) UNSIGNED,
    proyectosID INT(10) UNSIGNED,
    CONSTRAINT PK_mensaje
    PRIMARY KEY AUTO_INCREMENT(id)
);

ALTER TABLE mensajes 
	CHANGE COLUMN id id INT(10) UNSIGNED AUTO_INCREMENT;

ALTER TABLE mensajes
	ADD CONSTRAINT FK_mensaje_usuario
		FOREIGN KEY (usuarioID) REFERENCES usuarios(id);
        
ALTER TABLE mensajes
	ADD CONSTRAINT FK_mensaje_proyecto
		FOREIGN KEY (proyectosID) REFERENCES proyectos(id);
        
CREATE TABLE registros_tiempo(
	id INT(10) UNSIGNED,
    fecha DATE,
    horaInicial TIME,
    horaFinal TIME,
    tiempo TIME,
	tareaID INT(10) UNSIGNED,
    usuarioID INT(10) UNSIGNED,
    CONSTRAINT PK_registro_tiempo
    PRIMARY KEY AUTO_INCREMENT(id)
);

ALTER TABLE registros_tiempo
	CHANGE COLUMN tareaID tareaID INT(10) UNSIGNED NOT NULL,
    CHANGE COLUMN usuarioID usuarioID INT(10) UNSIGNED NOT NULL;

ALTER TABLE registros_tiempo
	CHANGE COLUMN id id INT(10) UNSIGNED AUTO_INCREMENT; 

ALTER TABLE registros_tiempo
	ADD CONSTRAINT FK_registro_tarea
		FOREIGN KEY (tareaID) REFERENCES tareas(id);
        
ALTER TABLE registros_tiempo
	ADD CONSTRAINT FK_registro_usuario
		FOREIGN KEY (usuarioID) REFERENCES usuarios(id);
        
CREATE TABLE archivos(
	id INT(10) UNSIGNED,
	nombre VARCHAR(100),
    tamaño BIGINT,
    fecha DATE,
    tareaID INT(10) UNSIGNED,
    CONSTRAINT PK_archivos
	PRIMARY KEY AUTO_INCREMENT(id)
);

ALTER TABLE archivos
	CHANGE COLUMN tareaID tareaID INT(10) UNSIGNED NOT NULL;

ALTER TABLE archivos
	CHANGE COLUMN id id INT(10) UNSIGNED AUTO_INCREMENT;

ALTER TABLE archivos
	ADD CONSTRAINT FK_archivo_tarea
		FOREIGN KEY (tareaID) REFERENCES tareas(id);

CREATE TABLE comentarios(
	id INT(10) UNSIGNED,
    contenido VARCHAR(255),
    fecha DATE,
    tareaID INT(10) UNSIGNED,
    usuarioID INT(10) UNSIGNED,
    CONSTRAINT PK_comentario
	PRIMARY KEY AUTO_INCREMENT(id)
);

ALTER TABLE comentarios 
	CHANGE COLUMN tareaID tareaID INT(10) UNSIGNED NOT NULL,
    CHANGE COLUMN usuarioID usuarioID INT(10) UNSIGNED NOT NULL;

ALTER TABLE comentarios
	CHANGE COLUMN id id INT(10) UNSIGNED AUTO_INCREMENT;

ALTER TABLE comentarios
	ADD CONSTRAINT FK_comentario_tarea
		FOREIGN KEY (tareaID) REFERENCES tareas(id);
        
ALTER TABLE comentarios
	ADD CONSTRAINT FK_comentario_usuario
		FOREIGN KEY (usuarioID) REFERENCES usuarios(id);
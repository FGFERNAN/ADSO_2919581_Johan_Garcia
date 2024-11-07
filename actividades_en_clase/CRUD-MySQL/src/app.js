const express = require('express')
const cors = require('cors');
const userRoutes = require("./routes/user_routes");
const roleRoutes = require("./routes/role_routes");
const userStatusRoutes = require("./routes/userStatus_routes");
const moduleRoutes = require("./routes/module_routes");
const roleModuleRoutes = require("./routes/roleModule_routes");
const loginRoutes = require("./routes/login_routes");

//Declared
const app=express();
const port=4000;

//Middleware
app.use(cors());
app.use(express.json());

//Routes
/* Estas líneas de código configuran rutas para diferentes partes de la aplicación. Cada instrucción 
`app.use` asocia una ruta específica con un conjunto correspondiente de rutas definidas en archivos separados.*/
app.use('/api-v1/user',userRoutes);
app.use('/api-v1/role',roleRoutes);
app.use('/api-v1/userStatus',userStatusRoutes);
app.use('/api-v1/module',moduleRoutes);
app.use('/api-v1/roleModule',roleModuleRoutes);
app.use('/api-v1/login',loginRoutes);

/* El fragmento de código `app.listen(port,()=>{ console.log(`Listener Server http://localhost:`); });`
configura un servidor para que escuche en un puerto específico (en este caso, el puerto 4000). Cuando el
servidor se inicia correctamente y escucha en el puerto especificado, registrará un mensaje en la
consola indicando que el servidor está en ejecución y es accesible en `http://localhost:4000`. */
app.listen(port,()=>{
  console.log(`Listener Server http://localhost:${port}`);
});


const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const logger = require('morgan');
const cors = require ('cors');

//** importar las rutas**//
 
const users = require('./routes/userRoutes');

const port = process.env.PORT || 3000;
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extendd: true}));
app.use(cors());
app.disable('x-powered-by');


app.set('port', port);
//*Llamado de rutas//
users(app);
//direction ip V4 de la maquina consultar ipconfig
server.listen(3000, '192.168.52.1' || 'localhost',
function () {
    console.log('Aplicacion de NodeJs' + process.
        pid + ' inicio puerto ' + port);
});

app.get('/', (req, res) => {
    res.send('Ruta raiz de Backend');
});

//Error handler

app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send(err.stack);
});

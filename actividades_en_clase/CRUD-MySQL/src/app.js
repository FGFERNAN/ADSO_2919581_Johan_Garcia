const express = require('express');
const {engine} = require('express-handlebars');
const myConnection = require('express-myconnection');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();

app.set('port', 4000);
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'crud_node_app'
}));

app.listen(app.get('port'), () => {
    console.log('Listening on port', app.get('port'));
});
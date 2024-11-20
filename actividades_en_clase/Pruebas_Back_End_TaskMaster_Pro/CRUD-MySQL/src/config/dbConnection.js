const mysql = require('mysql');


class DBConnection {
    constructor() {
        this.pool = mysql.createPool({
            host: 'localhost',
            user: 'root',
            password: '',
            port: 3306,
            database: 'task_master',
            connectionLimit: 10,
        });
    }
    query(sql, args = []){
        return new Promise((resolve, reject) => {
            this.pool.query(sql, args, (err, results) => {
                if(err){
                    console.error('Query error:', err.message);
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }

    close(){
        return new Promise((resolve, reject) => {
            this.pool.end((err) => {
                if(err){
                    console.error('Error closing connection pool', err.message);
                    reject(err);
                } else {
                    console.log('Connection pool closed successfully');
                    resolve();
                }
            });
        });
    }
}

module.exports =  DBConnection;



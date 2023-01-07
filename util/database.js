const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node_schema',
    password: 'Sumal@777'
});

module.exports = pool.promise();
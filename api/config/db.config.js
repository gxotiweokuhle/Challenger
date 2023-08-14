const mysql = require('mysql');

const pool = mysql.createPool({
    host:'bhg4lowxbarsk5uczcqs-mysql.services.clever-cloud.com',
    user: 'upakifvdnxj3iwhd',
    password:'d5ITfnQves6NXueaZnfi',
    database:'bhg4lowxbarsk5uczcqs'
})
pool.query('SELECT * FROM users', (err, results) => {
    if (err){
        console.error('Error executing query:', err);
    }
    else {
        console.log('Query results:', results);
    }
    pool.releaseConnection();
});
const mysql = require('mysql');

const connection = mysql.createConnection({
    host : 'localhost',
    port: '3307',
    user : 'root',
    password : 'root',
    database : 'my_db'
});

// connection.connect();

// connection.query('select * from board', function(error, results, fields){
//     if (error) {
//         console.log(error);
//     }
//     console.log('mysql info : ', results);
// })

// connection.end();

module.exports = connection
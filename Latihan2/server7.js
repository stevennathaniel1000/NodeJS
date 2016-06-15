var mysql = require('mysql');

var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'latihan'
}
 
);

connection.connect();

var query = connection.query('SELECT * FROM perawatanantivirus');

query.on('error', function(err) {
    throw err;
});

query.on('fields', function(fields) {
    console.log(fields);
});

query.on('result', function(row) {
    console.log(row.post_title);
});

connection.end();
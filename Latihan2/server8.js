var mysql = require('mysql');

var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'latihan'
}
                                       
);

connection.connect();

var queryString = 'SELECT * FROM perawatanantivirus';

connection.query(queryString, function(err, rows, fields) {
    if (err) throw err;
    
    for (var i in rows) {
        console.log('Nama Pengguna: ', rows[i].namapengguna);
    }
});


connection.end();
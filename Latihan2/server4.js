var mysql = require('mysql')

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'latihan'
})

connection.connect(function(err) {
    if (err) throw err
    console.log('Anda sudah terhubung....')
})
var mysql = require('mysql')

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'latihan'
})

connection.connect(function(err) {
    if (err) throw err
    console.log('Anda sudah terhubung...')
    
    connection.query('SELECT * FROM perawatanantivirus', function(err, results) {
        if (err) throw err
        console.log(results[1].bagiansubbagian)
        console.log(results[1].alamatip)
        console.log(results[1].namakomputer)
        console.log(result[1].namapengguna)
        
        
    })
})

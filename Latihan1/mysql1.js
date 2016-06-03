// Test koneksi ke database Mysql

var mysql = require("mysql");

// First you need to create a connection to the db

var koneksi = mysql.createConnection({host: 'localhost', database: 'latihan', user: 'root', password: ''});

koneksi.connect(function(err) {
    
    if (err) {
        
        console.error('gagal tersambung: ' + err.stack);
        
        return;
        
    }
    
    
    
    
    console.log('connected as id ' + koneksi.threadId);
    
    koneksi.end(function(err) {
        
        if (err) {
            
            console.error('gagal memutus koneksi: ' + err.stack);
            
            return;
        }
        
        
    })
});
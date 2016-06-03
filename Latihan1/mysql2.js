// query database

var mysql = require('mysql');

// Membuat koneksi ke database MySQL

var koneksi = mysql.createConnection({host: 'localhost', database: 'latihan', user: 'root', password: ''});

koneksi.connect(function(error) {
    
    if (error) {
        
        console.error('gagal tersambung: ' + error.stack);
            
            return;
        
    }
    
})
    
    koneksi.query ('SELECT * FROM pegawai', function (error, rows, field) {
        
        if (!error) {
            
            
            
            console.log('hasil melakukan query: ', rows);
            
        }
        
        else
            
            {
            
            console.log('Terjadi error: ', error.stack);
        
                return;
            
        }
        
    })
        
    
    
    
    koneksi.end(function(error) {
        
        if(error){
            
            console.error('gagal memutus koneksi: ' + error.stack);
        }
    
                   
    
});
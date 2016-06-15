// Membuat server web yg terhubung dengan database

// Include http module

var http = require('http'),
    
// And mysql module you have just installed
    mysql = require("mysql");

// Create the connection
// Data is default to new mysql installation and should be changed according to your configuration

var connection = mysql.createConnection({
    user: "root",
    password: "",
    database: "latihan"
});

// Create the http server
http.createServer(function (request, response) {
    // Attach listener on end event
    request.on('end', function(){
        // Query the database
        connection.query('SELECT * FROM perawatanantivirus;', function (error, rows, fields) {
            response.writeHead(200, {
                'Content-Type': 'x-application/json'
            });
            
            // Send data as JSON string.
            // Rows variable holds the result of the query.
            response.end(JSON.stringify(rows));
            
        }); 
    });
    
    // Listen on the 8080 port.
}).listen(8080);



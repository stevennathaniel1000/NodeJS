var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require("path");

// app.use(bodyParser());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index1.html'));
});

app.post('/', function(req, res) {
    var namaLengkap = req.body.namaLengkap;
    var html = 'Hello ' + namaLengkap + '.<br>' +
        '<a href="/">Coba Lagi.</a>';
    
    res.send(html);
});

app.listen(3000);
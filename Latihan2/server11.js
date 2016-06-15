var http = require('http');
var express = require('express');
var app = express();

app.set('view engine', 'jade');
app.set('views', './views');

app.get('/', function(req, res) {
    
    res.render('index');
    
});

app.listen(3000);
console.log('Running Express .... ');
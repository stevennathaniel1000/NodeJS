var http = require('http');
var express = require('express');
var app = express();
var app = express();

app.get('/', function(req, res) {
    
    res.send('<h1>Welcome to ExpressJS!</h1>');
});

app.listen(3000);
console.log('Running Express .... ');
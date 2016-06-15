var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require("path");

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index1.html'));
});

app.listen(3000);
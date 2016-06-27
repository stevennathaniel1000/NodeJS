/**
 * Created by StevenNathaniel on 27-Jun-16.
 */
var express = require('express');

var app = express();

var path = require('path');

var pug = require('pug');

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));


app.use(express.static('public'));

app.use('/static', express.static('css'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/halaman1.html'));

});

app.listen(3000);




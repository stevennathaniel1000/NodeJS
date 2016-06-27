/**
 * Created by StevenNathaniel on 27-Jun-16.
 */
var express = require('express');

var app = express();

var path = require('path');

var pug = require('pug');

var bodyParser = require('body-parser');


app.set('view engine', 'html');

app.set('css',__dirname + '/css');

app.set('js',__dirname + '/js');

app.set('public',__dirname + '/public');

app.set('views',__dirname + '/views');




app.use(express.static('css'));

app.use(express.static('js'));

app.use(bodyParser.urlencoded({extended:true}));


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/halaman1.html'));

});

app.listen(3000);
console.log("server berjalan di localhost port 3000");
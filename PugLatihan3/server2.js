/**
 * Created by StevenNathaniel on 20-Jun-16.
 */

var express = require('express');
var app = express();
var path = require('path');
var pug = require('pug');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
    res.render(path.join(__dirname + '/halaman1.pug'));
});

app.post('/', function(req, res) {
    console.log(req.body.namaawal);
})

app.listen(3000);
console.log("server berjalan di localhost port 3000");
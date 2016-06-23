/**
 * Created by StevenNathaniel on 20-Jun-16.
 */


var express = require('express');
var app = express();
var path = require('path');
var pug = require('pug');
var bodyParser = require('body-parser');
var fs = require('fs');

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
    res.render(path.join(__dirname + '/halaman1.pug'));
});

app.post('/', function(req, res) {
    var namaawal = req.body.namaawal;
    // req.pipe(res);
    // res.render(express.static(path.join(__dirname + '/halaman2.pug')));
    // res.render(path.join(__dirname + '/halaman2.pug', {namaawal}));
    // res.render(path.join(__dirname + "/halaman2.pug", {namaawal}));

    // res.render((path.join(__dirname + "/halaman2.pug")), {namaawal});

    res.render("halaman2.pug", {namaawal: namaawal});

    // console.log(namaawal);
    //console.log(app.args);

    res.end("yes");
});

app.listen(3000);
console.log("server berjalan di localhost port 3000");
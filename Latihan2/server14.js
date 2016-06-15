var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index3.html'));
});

app.use(bodyParser.urlencoded({ extended: true}));

app.post('/',function(req, res) {
    res.send('Anda mengirim info nama "' + req.body.nama + '".')
});

app.listen(3000);
console.log("Server berjalan di port 3000");
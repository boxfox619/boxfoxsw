var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send('hello world');
});

app.get('/shakenote', function(req, res){
   res.send('shake note!');
});

var server = app.listen(80, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
});
console.log('Server Start');

var express = require('express');
var app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', function(req, res){
   res.render('index', { title: 'GCHOI' });
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

var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient
var Server = require('mongodb').Server;
var MongoClient = require("mongodb").MongoClient;
var dbs;
MongoClient.connect("mongodb://localhost:5050/crunchbase", function(err, dbs){
   console.log("connected to the DB");

   var query = {"category_code" : "biotech"};
   dbs.collection("companies").find(query).toArray(function(err, docs){
       docs.forEach(function(doc){
           console.log(doc.name + " is a " + doc.category_code  + "company")
        });
  })
})

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', function(req, res){
   dbs.collection('users').findOne({},function(err,doc){
       if(err) throw err;
       res.send(doc);
   });
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

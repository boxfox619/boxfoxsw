var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongodb = require('./db_client');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static('views'));

app.get('/', function(req, res){
 res.sendfile(__dirname+'/views/index.html');
});

app.get('/css/', function(req, res){
console.log(req.url);
});

app.post('/signin', function(req, res){

console.log('login');
   var input_id = req.body.id;
   var input_pwd = req.body.password;
   if(input_id==null||input_pwd==null){
	res.status(400).send('정보를 모두 입력해 주세요');
   }else
   mongodb.connect('boxfox', function(){
	mongodb.db().collection('users').findOne({id:input_id}, function(err, user){
	 if(err){throw err;}
	 if(user){
	  if(user.password==input_pwd){
	  res.status(200).send('');
	  }else{
	  res.status(400).send('비밀번호가 일치하지 않습니다!');
	  }
	 }else{
	 mongodb.db().collection("users").insert({id:input_id,password:input_pwd}, function(e){
	  if(e){throw e;}
	  res.status(200).send('회원가입 되었습니다.');
	 }); 
	 } 
	});
   });
});

app.get('/shakenote', function(req, res){
   res.send('shake note!');
});

var server = app.listen(80, function (err) {
   if(err){throw err;}
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
});
console.log('Server Start');

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var server = require('http').createServer(app);

app.use(bodyParser());

// var textParser = bodyParser.text();

server.listen(3000, function(){
  console.log("Server listening on port 3000");
});

app.get('/', function(req, res){
  res.send('Hello, Express!')
});

app.get('/hi', function(req, res) {
  res.send('Hi!')
});

app.get('/users/:userId', function(req, res) {
  res.send('<h1>Hello, user #' + req.params.userId + "!");
});

app.post('/users', function(req, res) {
  console.log(req.body)
  res.send("Creating a new user with the name " + req.body.username + ".");
});



module.exports = server;
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var server = require('http').createServer(app);

app.set('view engine', 'jade');
app.use(bodyParser());

// var textParser = bodyParser.text();

server.listen(3000, function(){
  console.log("Server listening on port 3000");
});

app.get('/', function(req, res){
  res.render("home.jade", { title: "Having Fun With Express"});
});



module.exports = server;
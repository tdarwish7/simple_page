var express = require('express');
var server = express();
var bodyParser = require('body-parser');

server.use(express.static(__dirname+'/public'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));


server.get('/', function(request, response){
  response.sendFile('public/html/index.html', {root: __dirname});
});

server.get('/about', function(request, response){
  response.sendFile('public/html/about.html', {root: __dirname});
});

server.get('/contact', function(request, response){
  response.sendFile('public/html/contact.html', {root: __dirname});
});


server.post('/contact', function(request, response){
  response.json(request.body);
});

server.listen(8080);

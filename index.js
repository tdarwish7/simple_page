var express = require('express');
var server = express();


server.get('/', function(request, response){
  response.send('Hola!');
});

server.listen(8080);

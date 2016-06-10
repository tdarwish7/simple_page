var express = require('express');
var server = express();


server.get('/', function(request, response){
  response.sendFile('public/html/index.html', {root: __dirname});
});

server.get('/about', function(request, response){
  response.sendFile('')
}

server.listen(8080);

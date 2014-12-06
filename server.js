var express = require('express');
var server = express();

var port = process.env.PORT || 1337;

server.use('/', express.static(__dirname+"/public/"));

server.listen(port, function(){
    console.log("Server up and running on port: " + port);
});
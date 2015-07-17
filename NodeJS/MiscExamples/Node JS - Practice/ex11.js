/**
 * Created by SVG on 7/15/2015.
 * Events example - 1 connection event
 */

var events = require('events');
var http = require("http");

var server = http.createServer(function(request, response){
    console.log("Request received: "+request.url);
});

server.listen(8081, "localhost", function()
{
    console.log("Listening");
});

//tells when a user connected to server
server.on('connection', function (stream) {
    console.log('someone connected!'+stream.length);
});

//tells when a user disconnected to server
server.once('connection', function (stream) {
    console.log('Ah, we have our first user!');
});
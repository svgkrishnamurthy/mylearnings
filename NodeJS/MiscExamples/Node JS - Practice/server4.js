/**
 * Created by SVG on 7/15/2015.
 * Create server with 404 file
 */


var fs = require('fs');
var http = require("http");

var config = JSON.parse(fs.readFileSync("./files/config_server.json"));
var host = config.host;
var port = config.port;


console.log(host + "   "+port);

var server = http.createServer(function(request, response){
    console.log("Request received: "+request.url);

    fs.readFile("./public/"+request.url, function(error, data){
        if(error){
            response.writeHead(404, {"Content-type":"text/plain"});
            response.end("Sorry the page was not found");
        }
        else
        {
            response.writeHead(200, {"Content-type":"text/plain"});
            response.end(data);
        }
    });
});

server.listen(port, host, function()
{
    console.log("Listening");
});
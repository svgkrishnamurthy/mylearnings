/**
 * Created by SVG on 7/15/2015.
 * Watching file changes - listen
 */
var fs = require('fs');
var http = require("http");
var host = "localhost";
var port = "8081";
console.log('Starting');

//Async way
var contents = fs.readFileSync("./files/config_server.json");
var config = JSON.parse(contents);
console.log('User Name '+config.username);

var server = http.createServer(function(request, response){
    console.log("Request received: "+request.url);
});

server.listen(port, host, function()
{
    console.log("Listening");
});

fs.watchFile("./files/config.json", function()
{
    config = JSON.parse(fs.readFileSync("config.json"));
    host = config.host;
    port = config.port;

    server.close();
    server.listen(port, host, function()
    {
        console.log("No Listening to "+host+port);
    })
})
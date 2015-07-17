/**
 * Created by SVG on 7/15/2015.
 * Create server
 */

var http = require("http");
var i = 0;

http.createServer(function(request, response){
    i++
    console.log("request received ");
    response.write("Welcome to Node JS Server.");
    response.end();
}).listen(8081);

console.log("server is running at http://127.0.0.1:8081/");
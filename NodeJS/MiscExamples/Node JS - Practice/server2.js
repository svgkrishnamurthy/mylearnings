/**
 * Created by SVG on 7/15/2015.
 * Create server with file writing
 */

var fs = require('fs');
var http = require("http");
var i = 0;

http.createServer(function(request, response){
    i++
    console.log("request received ");
    fs.writeFile("./files/write_server.txt","something",function(error, data){console.log("written file content")})
    var contents = fs.readFileSync("./files/write_server.txt");
    response.write("Welcome to Node JS Server.");
    response.write(contents);
    response.end();
}).listen(8081);

console.log("server is running at http://127.0.0.1:8081/");
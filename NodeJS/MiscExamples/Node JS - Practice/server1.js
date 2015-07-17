/**
 * Created by SVG on 7/15/2015.
 * Create server with file reading
 */
var fs = require('fs');
var http = require("http");
var i = 0;

http.createServer(function(request, response){
    i++
    console.log("request received ");
    var contents = fs.readFileSync("./files/sample.txt");
    console.log("Contents: "+contents);
    response.write("Welcome to Node JS Server.");
    response.write(contents);
    response.end();
}).listen(8081);

console.log("server is running at http://127.0.0.1:8081/");

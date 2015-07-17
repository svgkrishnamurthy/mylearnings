/**
 * Created by SVG on 7/16/2015.
 * Server
 */

var http = require("http");
var url = require("url");

function start(route, handle)
{
    function onRequest(request, response)
    {
        var pathname = url.parse(request.url).pathname;

        console.log("Request for "+pathname+" has been received");

        request.setEncoding("utf8");
        request.addListener("data", function(postDataChunk){
            postData += postDataChunk;

            console.log("Received POST daa chunk '"+postDataChunk+".");

        });

        request.addListener("end", function(){
            route(handle, pathname, response, request);
        });
       // route(handle,pathname);

       // response.writeHead(200,{'Content-type':'plain/html'});
       // response.write("Hello World");
       // response.end();
    }


}


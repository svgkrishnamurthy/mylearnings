/**
 * Created by SVG on 7/16/2015.
 * Server
 */

var http = require("http");
var util = require("util");

function start(route, pathname)
{
    function onRequest(request, response)
    {
        var pathname = url.parse(request.url).pathname;

        console.log("Request for "+pathname+" has been received");

        route(handle,pathname);

       // response.writeHead(200,{'Content-type':'plain/html'});
       // response.write("Hello World");
       // response.end();
    }

    http.createServer(onRequest).listen(8091);

    exports.route = start;
}


/**
 * Created by SVG on 7/16/2015.
 */


/**
 * Created by SVG on 7/16/2015.
 * Request handlers
 */

exports.root = function(response)
{
    console.log("root called");
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Home Page');
    response.end();
}

exports.start = function()
{
    console.log("start called");
    exec("find/start", {timeout: 5000, maxBuffer:20000*1024}, function(error){
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write('Start Page');
        console.log(stdout);
        response.end();
    })
}

exports.upload = function()
{
    console.log("upload called");
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end();
}
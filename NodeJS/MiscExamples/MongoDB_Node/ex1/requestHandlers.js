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

    exec("find/start", {timeout: 5000, maxBuffer: 20000*1024, function(error){
        var body = '<html>'+
            '<head>'+
            '<meta http-equiv="Content-Type" content="text/html;charset-UTF-8"/>'+
            '</head> <body>' +
            '<form action="/upload" method="post">' +
            '<textarea name="text" rows="20" cols="60"></textarea><br>' +
            '<input type="submit" value="Submi Text">' +
            '</form></body></html';
    }
});

exports.upload = function(response, postData)
{
    console.log("upload called");
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("You have inserted "+querystring.parse(postData).text)
    response.end();
}
/**
 * Created by abridge on 7/16/2015.
 */

var querystring = require('querystring');

exports.start = function(response, postData)
{
    console.log("start called");


    exec("find/start", {timeout: 5000, maxBuffer: 20000*1024, function:(error);
    {
        var body = '<html>'+
                '<head>'+
                '<meta http-equiv="Content-Type" content="text/html;charset-UTF-8"/>'+
                '</head> <body>' +
            '<form action="/upload" method="post">' +
            '<textarea name="text" rows="20" cols="60"></textarea><br>' +
            '<input type="submit" value="Submi Text">' +
            '</form></body></html';
    }
};
));
}
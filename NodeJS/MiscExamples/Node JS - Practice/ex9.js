/**
 * Created by SVG on 7/15/2015.
 * Reading file using buffer - example 2
 */

var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    var fileName = './files/simple.txt';
    console.log("File : "+ fileName + "  ");

    fs.exists(fileName, function (exists) {
        if (exists) {
            fs.stat(fileName, function (error, stats) {
                fs.open(fileName, "r", function (error, fd) {
                    var buffer = new Buffer(stats.size);

                    fs.read(fd, buffer, 0, buffer.length, null, function (error, bytesRead, buffer) {
                        var data = buffer.toString("utf8", 0, buffer.length);
                        console.log(data);

                        fs.close(fd);
                    });
                });
            });
        }
    });
});

server.listen(8081,"mymachine.com");
console.log('server running...')
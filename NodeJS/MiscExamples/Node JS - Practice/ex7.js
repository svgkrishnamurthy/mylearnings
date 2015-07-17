/**
 * Created by SVG on 7/15/2015.
 * Reading file using buffer - using exists property
 */

var fs = require('fs');

var fileName = "./files/index.html";
fs.exists(fileName,function(exists){
    if(exists)
    {
        console.log("File Exists");
        fs.open(fileName,"r",function(error, fd){
            if(error) "error";//throw error;

            var buff = new Buffer(100);

            fs.read(fd, buff, 0,buff.length, null, function(error, bytesRead, buffer){
                if(error) throw error;

                console.log(error, bytesRead, buffer);
                console.log(buffer.toString());

                fs.close(fd, function(){
                    console.log("Done");
                });
            })
        });


        fs.open("./files/test.html","w", function(err, fd){
            if(err) throw err;

            var buffer = new Buffer("<html>\n<head><title>Some</title></head>");

            fs.write(fd, buffer, 0, buffer.length, null, function(err, written, buffer)
            {
                if(err) throw err;

                console.log(err, written, buffer);

                fs.close(fd, function()
                {
                    console.log("File writing completed!!!");
                });
            })
        });
    }
    else
    {
        console.log("File does NOT Exists");
    }
});





/**
 * Created by abridge on 7/17/2015.
 */

var fs = require("fs");
var express = require("express");
var mongo = require("mongodb");
var dbHost = "127.1.1.1";
var dbPort = 27017;

var config = JSON.parse(fs.readFileSync("config.json"));
var host = config.host;
var port = config.port;

var app = express();

app.get('/', function (req, res) {
    res.send('Hello World')
})

//text is parameter here
app.get('/hello/:text', function (req, res) {
    res.send('Hello World '+req.params.text);
})

//text is parameter here
app.get('/users/:id', function (req, res) {
    res.send('Hello World '+req.params.id);
    getUser(req.params.id, function(user){
        if(!user){
            res.send('User does not exists');
        }
        else{
            response.send(user);
        }
    });
})


app.listen(8081,function(){
    console .log ( 'Listening incoming requests to '+port );
});


function getUser(id, callback)
{
    var db = new mongo.Db('testDb', new mongo.Server(dbHost,dbPort,{}));

    db.open(function(error){
        console.log("We are connected");

        db.collection("users", function(error, collection){
            console.log("we have the collection " +collection.length);
            if(error){
                console.log("Error "+error);
            }

            collection.find({"id":id}, function(error,cursor){
                if(error){
                    console.log("Error");
                }

                console.log(cursor);
                cursor.toArray(function(error, users){
                    if(users.length==0){
                        callback(false);
                    }
                    else
                    {
                        callback(users[0]);
                    }
                });
            });
        });
    });
}

/**
 * Created by SVG on 7/16/2015.
 * Connection to MongoDB
 */

var mongo = require("mongodb");
var host = "127.1.1.1";
var port = 27017;

var db = new mongo.Db("testDb", new mongo.Server(host,port,{safe: true}));

db.open(function(error){
    console.log("We are connected !"+host +":"+port);
    db.collection("users",function(error,collection){
        console.log("We have collection");
        var document = {id:1, name:"David", title:"About MongoDB"};
        collection.insert(document, {w: 1}, function(err, records){
            console.log("Record added as "+records[0]);
        });
    });

    db.collection("users", function(error, collection){
        if(error){
            console.log("Error "+error);
        }

        collection.find({"name":'Dave'}, function(error,cursor){
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

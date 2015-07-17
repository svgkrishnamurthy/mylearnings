/**
 * Created by SVG on 7/16/2015.
 * Connection to MongoDB
 */

var mongo = require("mongodb");
var host = "127.1.1.1";
var port = 27017;

var db = new mongo.Db("admin", new mongo.Server(host,port,{safe: true}));

db.open(function(error){
    console.log("We are connected !"+host +":"+importScripts());
    db.collection("users",function(error,collection){
        console.log("We have collection");
    })
});

/**
 * Created by SVG on 7/17/2015.
 */
var express = require('express');
var app = express();


app.get('/', function (req, res) {
    res.send('Hello World')
})

app.listen(8081,function(){
    console .log ( 'Listening incoming requests' );
});
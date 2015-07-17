/**
 * Created by SVG on 7/15/2015.
 * server with express package
 */

var express = require('express')
var app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.listen(8081)
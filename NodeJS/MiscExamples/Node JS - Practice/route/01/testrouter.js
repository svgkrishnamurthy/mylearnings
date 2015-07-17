/**
 * Created by SVG on 7/16/2015.
 * Testing router and server
 */

var server = require("./route/server");
var router = require("./route/router")
var reqHandlers = require('./requestHandlers');

var handle = {};
handle['/'] = reqHandlers.root;
handle['/start'] = reqHandlers.start;
handle['/upload'] = reqHandlers.upload;

server.start(router.route,handle);
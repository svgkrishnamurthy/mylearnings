/**
 * Created by SVG on 7/15/2015.
 * Reading contents of JSON file
 */
var fs = require('fs');
console.log('Starting');

//Async way
var contents = fs.readFileSync("./files/config.json");
console.log("Contents: "+ contents);
var config = JSON.parse(contents);
console.log("config: ", config);
console.log('End here... '+config.username);
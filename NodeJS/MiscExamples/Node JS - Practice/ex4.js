/**
 * Created by SVG on 7/15/2015.
 * Watching file changes
 */
var fs = require('fs');
console.log('Starting');

//Async way
var contents = fs.readFileSync("./files/config.json");
var config = JSON.parse(contents);
console.log('User Name '+config.username);

fs.watch("./files/config.json", function()
{
    console.log("File Changed");
})
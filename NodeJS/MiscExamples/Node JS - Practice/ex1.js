/**
 * Created by SVG on 7/15/2015.
 * Read contents of file
 */

var fs = require('fs');
console.log('Starting');
//sync way
//var contents = fs.readFileSync("./files/sample.txt");
//console.log("Contents: "+contents);

//Async way
fs.readFile("./files/sample.txt", function(error, data){
    console.log("Contents: "+data);
});

console.log('End here...')
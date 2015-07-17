/**
 * Created by SVG on 7/15/2015.
 * Writing file
 */
var fs = require('fs');
console.log('Starting');

//fs.writeFileSync("./files/write_sync.txt","Contents");
fs.writeFile("./files/write_Async.txt","Contents",function(error, data){console.log("written file content")})

console.log('End here...')
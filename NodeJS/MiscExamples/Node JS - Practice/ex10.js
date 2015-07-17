/**
 * Created by SVG on 7/15/2015.
 * Create and delete directories recurrsively
 * for create or remove directories, we need to do the below:
 * Create:
 * npm install mkdirp   or npm install -g mkdirp(globally)
 * Remove:
 * npm install rmdir   or npm install -g rmdir(globally)
 */

var mkdirp = require('mkdirp');
var rmdir = require( 'rmdir' );

var path = "./files/some/path/foo";

mkdirp(path, function(err) {

    if(err) throw err;

    console.log("Directory is being created "+ path);
});

path = "./files";
rmdir( path, function ( err, dirs, files ){
    console.log( dirs );
    console.log( files );
    console.log( 'all files are removed' );
});


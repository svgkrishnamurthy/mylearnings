/**
 * Created by SVG on 7/16/2015.
 * Router
 */

function route(handle, pathname)
{
    console.log("About to route a request for "+pathname);

    if(typeof handle[pathname] === 'function')
    {
        handle[pathname]();
    }
    else
    {
        console.log('No request handler found for '+pathname);
    }
}

exports.route = route;
/**
 * Created by SVG on 7/15/2015.
 * server with custom error pages - 404,500
 */

var express = require('express')
var app = express()

app.get('google.com', function (req, res) {
    res.send('Hello World')
})

app.listen(8081)

// "app.router" positions our routes
// specifically above the middleware
// assigned below

app.use(app.router);

// Since this is the last non-error-handling
// middleware use()d, we assume 404, as nothing else
// responded.

app.use(function(req, res, next){
    // the status option, or res.statusCode = 404
    // are equivalent, however with the option we
    // get the "status" local available as well
    res.render('404', { status: 404, url: req.url });
});

// error-handling middleware, take the same form
// as regular middleware, however they require an
// arity of 4, aka the signature (err, req, res, next).
// when connect has an error, it will invoke ONLY error-handling
// middleware.

// If we were to next() here any remaining non-error-handling
// middleware would then be executed, or if we next(err) to
// continue passing the error, only error-handling middleware
// would remain being executed, however here
// we simply respond with an error page.


app.use(function(err, req, res, next){
    // we may use properties of the error object
    // here and next(err) appropriately, or if
    // we possibly recovered from the error, simply next().
    res.render('500', {
        status: err.status || 500
        , error: err
    });
});

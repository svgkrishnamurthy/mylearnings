/**
 * Created by SVG on 7/15/2015.
 * Events -
 */

var events = require('events');

var eventEmitter = new events.EventEmitter();

var ringBell = function ringBell()
{
    console.log('ring ring ring');
};

eventEmitter.on('doorOpen', ringBell);

eventEmitter.emit('doorOpen');
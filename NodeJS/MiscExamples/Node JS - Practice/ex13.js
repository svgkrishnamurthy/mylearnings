/**
 * Created by SVG on 7/15/2015.
 * Emitter, Inheritance emit
 */
var events = require('events');
var util = require("util");

function Person(name, contact)
{
    this.name = name;
    this.contact = contact;

    events.EventEmitter.call(this);

    this.displayName = function()
    {
        this.emit('showName');
    }

    this.displayContact = function()
    {
        this.emit('showContact');
    }

    this._toString = function()
    {
        this.emit('showFullDetails');
    }
}

util.inherits(Person, events.EventEmitter)
console.log("Is person child of EventEmitter");
console.log(Person.super_ === events.EventEmitter);


var mike = new Person('Mike Cartor','mike.car@gmail.com');
console.log("Is Mike object of Person type");
console.log(mike instanceof Person);

console.log("Is Mike object of EventEmitter type");
console.log(mike instanceof events.EventEmitter);

var nameCallBack = function()
{
    console.log(''+this.name);
}
var events = require('events');
// all event properties and methods are an instance of an EventEmitter object
var eventEmitter = new events.EventEmitter();

var myEventHandler = function() {
  console.log('Ding');
}

eventEmitter.on('Fox says', myEventHandler);
eventEmitter.emit('Fox says');

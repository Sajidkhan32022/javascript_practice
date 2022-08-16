var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!');
}
//myEventHandler()
//Assign the eventhandler to an event:
const open = 'my event'
//eventEmitter.on(open, myEventHandler);
eventEmitter.on.myEventHandler
//Fire the 'scream' event:
eventEmitter.emit(open);
console.log(events.EventEmitter)

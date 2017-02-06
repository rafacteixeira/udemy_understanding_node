var Emitter = require('events');
var config = require('./config').events;


var emtr = new Emitter();

emtr.on(config.GREET,function() {
    console.log('Somewhere, someone said hello.');
});

emtr.on(config.GREET,function() {
    console.log('A greeting occurred!');
});

console.log('Hello!');
emtr.emit(config.GREET);
var EventEmitter = require('events');
var util = require('util');

function Greeter() {
    this.greeting = 'Hello World!';
}

util.inherits(Greeter, EventEmitter);

Greeter.prototype.greet = function( data ) {
    console.log(this.greeting);
    this.emit('greet', data);
};

var greeter1 = new Greeter();
greeter1.on('greet', function(data){
    console.log('someone greeted!: ' + data);
});

greeter1.greet('Rafael');
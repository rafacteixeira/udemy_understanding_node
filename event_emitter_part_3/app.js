'use strict';
let Greeter = require('./greeter');

let greeter1 = new Greeter();
greeter1.on('greet', function(data){
    console.log('someone greeted!: ' + data);
});

greeter1.greet('Rafael');
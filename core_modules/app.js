var util = require('util');

var name = 'Rafael';
var greeting = util.format('Hello, %s', name);
util.log(greeting);
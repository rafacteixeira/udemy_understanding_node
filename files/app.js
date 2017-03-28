var fs = require('fs');

var greetFile = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log(greetFile);

var greetFile2 = fs.readFile(__dirname + '/greet.txt', function(err, data){
    console.log('Success');
    console.log(data)
});

var greetFileError = fs.readFile(__dirname + '/greet_error.txt', function(err, data){
    console.log('Error');
    console.log(err.message)
});
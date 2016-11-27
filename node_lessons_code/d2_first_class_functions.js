// function statement
function greet() {
    console.log('hi');
}

greet();

// functions are first class;
function logGreet(fn) {
    console.log('Logging greet');
    fn()
}

logGreet(greet);

//Function Expressions
var greetMe = function () {
    console.log('Hi Rafael');
}

greetMe();

logGreet(greetMe);

logGreet(function () {
    console.log('Function Expression as a parameter: Hello Rafael');
});
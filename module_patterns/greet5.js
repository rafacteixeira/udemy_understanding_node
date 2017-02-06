var greeting = 'Hello World 5';

function greet() {
    console.log(greeting);
}

//revealing module pattern: expoe apenas o que é desejado (publico)
//o resto se mantem privado ao módulo
module.exports = {
    greet: greet
}
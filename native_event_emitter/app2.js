var util = require('util');

function Person() {
    this.firstname = 'John';
    this.lastname = 'Doe';
}

Person.prototype.greet = function() {
    console.log('Hello ' + this.firstname + ' ' + this.lastname);
};

function Policeman() {
    Person.call(this);//super constructor
    /*
    permite que o objeto filho tenha acesso a todas as propriedades que existem no objeto pai.
    sem fazer isso apenas os prototypes estão conectados.
     */
    this.badgenumber = '1234';
}

util.inherits(Policeman, Person);
var officer = new Policeman();
officer.greet();
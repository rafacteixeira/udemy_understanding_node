function Person() {
    this.name = '';
    this.address = {
        street: '',
        number: 0,
        city: '',
        country: ''
    }
}

Person.prototype.sayName = function() {
  console.log(this.name);
};

function IndividualPerson() {
    Person.call(this);
    this.taxNumber = '';
}
IndividualPerson.prototype = Object.create(Person.prototype);
IndividualPerson.prototype.printCpf = function () {
    console.log(this.taxNumber);
};

var rafael = new IndividualPerson();
rafael.name = 'rafael nome';
rafael.taxNumber = '083';
rafael.sayName();
rafael.printCpf();

var rafael2 = new Person();
rafael2.name = 'rafael 2';
rafael2.sayName();
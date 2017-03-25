var buff = new Buffer('Hello', 'utf8');
console.log(buff);
console.log(buff.toString());
console.log(buff.toJSON());

buff.write('World');

console.log(buff.toString());
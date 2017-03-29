var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.send('<html><head><title>hello express</title></head><body><h1>Hello World!!</h1></body></html>');
});

app.get('/api', function (req, res) {
    res.json({ firstName:"John", lastName: "Doe"});
});

app.listen(port);
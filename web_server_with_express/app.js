var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
    console.log('Request received and filtered');
    next();
});

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/api', function (req, res) {
    res.json({ firstName:"John", lastName: "Doe"});
});

app.get('/person/:id', function (req, res) {
    res.json({ id: req.params.id});
});

app.listen(port);
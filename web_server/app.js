var http = require('http');
var fs = require('fs');
var moment = require('moment');


http.createServer(function(req, res){

    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type' : 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    } else if (req.url === '/api') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        var obj = {
            firstName: 'John',
            lastName: 'Doe',
            date: moment().format('DD/MM/YYYY HH:mm:ss')
        };
        res.end(JSON.stringify(obj));
    } else {
        res.writeHead(404);
        res.end();
    }
}).listen(1337, '127.0.0.1');
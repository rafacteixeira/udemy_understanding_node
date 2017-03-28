var http = require('http');
var fs = require('fs');


http.createServer(function(req, resp){
    resp.writeHead(200, { 'Content-Type' : 'text/html'});
    var html = fs.readFileSync(__dirname + '/index.html');
    resp.end(html);
}).listen(1337, '127.0.0.1');
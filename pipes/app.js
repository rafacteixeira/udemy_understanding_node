var fs = require('fs');
var zlib = require('zlib');

var readable = fs.createReadStream(__dirname + '/greet.txt');
var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');
var writablePipe = fs.createWriteStream(__dirname + '/greetpipe.txt');
var compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');

var gzip = zlib.createGzip();


readable.on('data', function(chunk){
    console.log(chunk);
    writable.write(chunk);
});

readable.pipe(writablePipe);

readable.pipe(gzip).pipe(compressed);
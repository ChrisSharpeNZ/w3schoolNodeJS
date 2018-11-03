var http = require('http');

http.createServer(basehttpserver).listen(8080);

function basehttpserver(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
}
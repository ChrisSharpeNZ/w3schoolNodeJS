var http = require('http');

http.createServer(httpserver).listen(8080);

function httpserver (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url);
    res.end();
}
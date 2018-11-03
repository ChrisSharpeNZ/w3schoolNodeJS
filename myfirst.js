var http = require('http');
var dt = require('./modules/datetime');

http.createServer(httpserver).listen(8080);


function httpserver (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end();
}
var http = require('http');
var fs = require('fs');

http.createServer(httpserver).listen(8080);

function httpserver (req, res) {
    fs.readFile('./source/demofile1.html', hostcontent);

    function hostcontent (err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    }
}


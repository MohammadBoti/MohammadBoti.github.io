var http = require('http');
var url = require('url');
var fs = require('fs');
var addmod = require('./addmod');

http.createServer(function(req, res){
    var q = url.parse(req.url, true);
    var fileName = "." + q.pathname; 
   // console.log(q.pathname);
    if (q.pathname == "/add.js") {
        addmod.add(req, res, q.query);
    }
        
    else 
        fs.readFile(fileName, function(err, data) {
            if (err) {
                res.writeHead(404, {'Content-type' : 'text/html'});
                return res.end("404 NOT FOUND");
            }
            res.writeHead(200);
            res.write(data);
            return res.end();
        })
}).listen(8080);
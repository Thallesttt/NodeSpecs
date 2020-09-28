const http= require('http');
const fs=require('fs');
const server= http.createServer(function(req,res) {
    fs.readFile('file.html',function(err, data) {
        res.writeHead(200,{'Content-type:':'text/html'});
        res.write(data);
        return res.end();
    })
})
server.listen(8080,()=>{
});



/*var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);
*/ 

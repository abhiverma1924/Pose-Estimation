var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
   		   console.log('req was made by :' + req.url)	
           res.writeHead(200,{'content-Type': 'text/html'});
            var myReadStream = fs.createReadStream(__dirname + '/posenet.html','utf-8');
            myReadStream.pipe(res);
});


server.listen(3000,'127.0.0.1');
console.log("listening at port 3000");
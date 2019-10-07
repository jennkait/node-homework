var http = require('http');
http.createServer(function (req, res) {
 res.writeHead(200, {'Content-Type': 'text/html'});
var url = req.url;
 if(url ==='/about'){
    res.write(`<h1>About Kaitlyn's Node Server<h1>`);
    res.end();
 }else{
    res.write('<h1>Hello World!<h1>'); 
    res.end(); 
 }
}).listen(8080, function(){
 console.log("server start at port 8080");
});
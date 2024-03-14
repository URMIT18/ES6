var http = require('http');
var a = 20;
var b = 20;
var c = a + b;
var msg = "";
if (c < 20) {
    msg = "Sum is less than 20";
} else {
    msg = "Sum is greater than 20";
}
http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("hello world!<br>");
    res.write(`A value is ${a} and B value is ${b} and C value is ${c}<br>`);
    res.end("Bye");
}).listen(8080);
console.log("Server is running on http://127.0.0.1:8080/");
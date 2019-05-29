//importing node framework
// var express = require('express');
// var path = require('path');
//
// var app = express();
//
//
// app.get('/', function (req, res) {
//  res.send('Server is Running on Port 3000');
// });
//
// app.get('/hello', function (req, res) {
//   const message = 'Hello ' + process.env.CUSTOM_ENV;
//  res.send(message);
// });
//
//
// //listen to port 3000 by default
// app.listen(3000);
// console.log('Running on Port : 3000');
//
// module.exports = app;

var http = require("http");

http.createServer(function (request, response) {
   // Send the HTTP header
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   var test = process.env.CUSTOM_ENV;
   var responseText = 'PASSWORD TEST : ' + test;
   // Send the response body as "Hello World"
   response.end(responseText);
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/'); 

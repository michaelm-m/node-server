var express = require('express');

const app = express();
const port = 8081;

app.get('/', (req, res) => {
  const responseText = '*Node Application ::: Hello : ' + process.env.CUSTOM_ENV + ' has ' + process.env.CUSTOM_ENV_2;
  res.send(responseText);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});

//
// var http = require("http");
//
// http.createServer(function (request, response) {
//    // Send the HTTP header
//    // HTTP Status: 200 : OK
//    // Content Type: text/plain
//    response.writeHead(200, {'Content-Type': 'text/plain'});
//    var test = process.env.CUSTOM_ENV;
//    var responseText = 'PASSWORD TEST : ' + test;
//    // Send the response body as "Hello World"
//    response.end(responseText);
// }).listen(8081);
//
// // Console will print the message
// console.log('Server running at http://127.0.0.1:8081/');

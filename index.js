//importing node framework
var express = require('express');
var path = require('path');

var app = express();


app.get('/', function (req, res) {
 res.send('Server is Running on Port 3000');
});

app.get('/hello', function (req, res) {
  const message = 'Hello ' + process.env.CUSTOM_ENV;
 res.send(message);
});


//listen to port 3000 by default
app.listen(3000);
console.log('Running on Port : 3000');

module.exports = app;

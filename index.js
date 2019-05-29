//importing node framework
var express = require('express');
var path = require('path');

var app = express();


app.get('/', function (req, res) {
 res.send('Server is Running on Port 3000');
});

app.get('/hello', function (req, res) {
 res.send('*hello-env-dev-2 : ' + process.env.CUSTOM_ENV2 + ' ' + process.env.CUSTOM_ENV + ' ::: ' + process.env.CONSOLE_PROP);
});


//listen to port 3000 by default
app.listen(3000);
console.log('Running on Port : 3000');


// var redis = require("redis"),
//     client = redis.createClient();
//
// client.on("connect", function () {
//   console.log('REDIS connect');
//     client.set("bar", JSON.stringify(myJson));
//     client.get("bar", function (err, value) {
//       if (err) throw(err);
//       var testJson = JSON.parse(value);
//       console.log(testJson.glossary.title);
//     });
// });

module.exports = app;

var fs = require('fs');
var http = require('http');
var https = require('https');

var privateKeyLocation = process.env.NODE_TEST_PRIVATE_KEY;
var certificateLocation = process.env.NODE_TEST_CERTIFICATE;

console.log(privateKeyLocation);
console.log(certificateLocation);

var privateKey  = fs.readFileSync(privateKeyLocation, 'utf8');
var certificate = fs.readFileSync(certificateLocation, 'utf8');

var credentials = {key: privateKey, cert: certificate};
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(8080);
httpsServer.listen(8443);
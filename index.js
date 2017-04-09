var express = require('express');
var cors = require('cors')

var app = express();

var PORT = 3000;

// TODO - more configuration - tighten it up
app.use(cors());

app.get('/', function (req, res, next) {
  res.send('Hello World!');
});

app.get('/json', function (req, res, next) {
  res.send(JSON.stringify({hello: 'world'}));
});

app.listen(PORT, function () {
  console.log('Example app listening on port ' + PORT);
});

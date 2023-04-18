var path = require('path');
var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.use('/public',express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.render('index');
});


app.listen(8080);
console.log('Server is listening on port 8080');
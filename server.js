require('dotenv').config();

var express = require('express');
var app = express();
var port = process.env.PORT || 9000;


app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// app.get('/', function (req, res) {
//   res.sendFile('index.html');
// });

// var routes = require('./controllers/routes');
// app.use('/', routes);


app.listen(port, function () {

  console.log("Server listening on: http://localhost:" + port);
});
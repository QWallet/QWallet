const port = process.env.PORT || 8080

var fs = require('fs');
var hsts = require('hsts');
var helmet = require('helmet');
var express = require('express');
var http = require('http');
var express_enforces_ssl = require('express-enforces-ssl');
var path = require("path");

var app = express();

app.enable('trust proxy');

app.use(express_enforces_ssl());

app.use(hsts({
  // Must be at least 1 year to be approved
  maxAge: 31536000,

  // Must be enabled to be approved
  includeSubDomains: true,
  preload: true
}))

app.use(express.static(__dirname + '/public'));

app.get('/*', function(req, res) {
  res.sendFile(__dirname + "/" + "landing.html");
});

http.createServer(app).listen(port, function() {
	console.log(port);
});

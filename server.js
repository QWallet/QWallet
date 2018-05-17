const express = require('express')
const app = express()

var path = require("path");

app.use(express.static(__dirname + '/public'));

app.get( '/', function( req, res ) {
    res.sendFile( path.join( __dirname + '/landing.html' ));
  });

app.listen(8080, () => console.log('Example app listening on port 8080!'))

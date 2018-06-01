var Chance = require('chance');
var chance = new Chance();

var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send(generateStudents());
});

/*
app.get('/test', function(req, res) {
	res.send("test");
});
*/

app.listen(3000, function(){
	console.log('Accepting HTTP request on port 3000')
});
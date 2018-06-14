var Chance = require('chance');
var chance = new Chance();

var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send(generateAnimals());
});

app.listen(3000, function(){
	console.log('Accepting HTTP request on port 3000')
});

function generateAnimals(){
	var numberOfAnimals = 15;
	var animals = [];
	
	for(var i = 0; i < numberOfAnimals; i++){
		animals.push(chance.animal() + "3");
	}
	
	console.log(animals);
	return animals;
}
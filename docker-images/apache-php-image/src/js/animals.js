$(function(){
	console.log("Creating animals");
	
	function createAnimals(){
		$.getJSON( "api/zoo/", function( animals ) {
			console.log(animals);                         
			var message = "Nobody is here";
			if(animals.length > 0) {
			    message = animals[0];                                  
			}
			$(".modif").text(message);
		});
	};
	createAnimals();
	setInterval(createAnimals, 2000);
});
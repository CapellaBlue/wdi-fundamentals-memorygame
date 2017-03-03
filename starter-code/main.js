console.log("JS file is connected to HTML! Woo!")

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

if(cardTwo === cardFour){
	alert('You found a match!');
} else if (cardOne === cardTwo){
	alert('You found a match!')
} else if (cardOne === cardThree){
	alert('You found a match!')
} else if (cardThree === cardFour){
	alert('You found a match!')
} else {
	alert('Sorry, try again.')
}
//get an element with the id of gameboard; set to variable//
var gameBoard = document.getElementById('game-board');
//for loop that creates an HTML element for each card.//
//each HTML element should be a div, and have the class card)//
//create a function called createCards in your JS file.//
var createCards = function() {
	for(var i=0; i<4; i++) {
	var cardDiv = document.createElement("div")
	cardDiv.className = 'card';
	gameBoard.appendChild(cardDiv);
	}
}



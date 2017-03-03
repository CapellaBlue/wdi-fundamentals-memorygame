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
for(var card     Divs=0; cardDivs<4; cardDivs++) {
	document.createElement("div").className = 'card'
}
//each HTML element should be a div, and have the class card)//


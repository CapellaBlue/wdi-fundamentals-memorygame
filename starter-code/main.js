
var cards = ['queen', 'queen', 'king', 'king'];
//declare a variable cardsInPlay, whose value is an empty array. These are the cards in play
var cardsInPlay = [];

//get an element with the id of gameboard; set to variable//
var gameBoard = document.getElementById('game-board');
//for loop that creates an HTML element for each card.//
//each HTML element should be a div, and have the class card)//
//create a function called createCards in your JS file.//
var createBoard = function() {
	for(var i=0; i<4; i++) {
	var cardDiv = document.createElement("div");
	cardDiv.className = 'card';
	//give each element an attribute that equals the card value
	cardDiv.setAttribute('data-card', cards[i]);
	cardDiv.addEventListener('click', isTwoCards);
	gameBoard.appendChild(cardDiv);
	}
}
//to check if two cards are in play
var isTwoCards = function() {
	cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='king.png' alt='King of Spades'>"; // king
	} else {
		this.innerHTML = "<img src='queen.png' alt='Queen of Spades'>"; //queen
	}
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}
//to test if two cards in play are a match
var isMatch = function() {
	if (cards[0] === cards[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");

  }
}
//call the function:)//
createBoard();




// Default counter
var wins = 0; // (# of times the user has guessed correctly)
var losses = 0; // (# of times the user has failed to guess correctly after exhausting all guesses)
var guessesLeft = 9; // (# of guesses left. This will update)

// Current guesses will be stored into an array
var currentGuessed = []; // Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)

// Full list of choices computer can choose from
var computerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// When the player wins, increase the Wins counter and start the game over again (without refreshing the page).

document.onkeyup = function(event) {

	// User's & computer guess
	var userGuess = String.currentGuessed(event.key).toLowerCase();
	var computerGuess = computerLetters[Math.floor(Math.random()*computerLetters.length)];


	if (userGuess === computerGuess) { // if user guesses correctly
		wins++;
		console.log("User wins");
		guessesLeft = 9;
		currentGuessed.length = 0;
	} else if (guessesLeft === 0) { // if user has 0 guesses left and still guessed incorrectly, reset
		losses++;
		console.log("User loses");
		guessesLeft = 9;
		currentGuessed.length = 0;
	} else if (userGuess !== computer) { // if user guesses incorrectly, subtract 1 guess left
		guessesLeft--;
	}
	

	var html = 
	"<h1>The Psychic Game</h1>" +
	"<p>Guess what letter I'm thinking of</p>" +
	"<p>Wins: " + wins + " </p>" +
	"<p>Losses: " + losses + "</p>" +
	"<p>Guess Left: " + guessesLeft + "</p>" +
	"<p>Your Guesses So Far: " + currentGuessed + "</p>";


}







// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onkeyup2
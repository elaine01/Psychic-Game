// Default counter
var wins = 0; // (# of times the user has guessed correctly)
var losses = 0; // (# of times the user has failed to guess correctly after exhausting all guesses)
var guessesLeft = 9; // (# of guesses left. This will update)

// Current guesses will be stored into an array
var currentGuessed = []; // Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)

// Full list of choices computer can choose from
var computerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// characters user can't use
var characters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ",", ".", "/", ";", "[", "]", "|", "!", "@", "#", "$", "%", "^", "&", "*"," (", ")", "\\", "=", "+", "-", "_", "?", "<", ">"]

// When the player wins, increase the Wins counter and start the game over again (without refreshing the page).
document.onkeyup = function(event) {

	if (event.key === "Meta") {
		console.log(event.key)
		return;	
	}

// reset function
var reset = function() {
	guessesLeft = 9;
	currentGuessed.length = 0;
	document.querySelector(".guesses").innerHTML = "Guess left: 9";
}

	// User's & computer guess
	var userGuess = event.key.toLowerCase();
	var computerGuess = computerLetters[Math.floor(Math.random()*computerLetters.length)];

	if (characters.indexOf(userGuess) !== -1) {
		return alert("You must pick a letter to play!");
	} 

	if (userGuess === computerGuess) { // if user guesses correctly
		wins++;
		console.log("User wins");
		reset();
		document.querySelector(".win").innerHTML = "Wins: " + wins;
	} else if (guessesLeft === 0) { // if user has 0 guesses left and still guessed incorrectly, reset
		losses++;
		console.log("User loses");
		reset();
		document.querySelector(".loss").innerHTML = "Losses: " + losses;
	} else if (userGuess !== computerGuess) { // if user guesses incorrectly, subtract 1 guess left
		guessesLeft--;
		console.log("guesses left")
		document.querySelector(".guesses").innerHTML = "Guess Left: " + guessesLeft;
	}
	
	// Display the letters that the user guessed on viewport
	currentGuessed.push(userGuess);
	document.querySelector(".alreadyGuessed").innerHTML = currentGuessed;
	}
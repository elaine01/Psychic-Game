// Default counter
var wins = 0; // (# of times the user has guessed correctly)
var losses = 0; // (# of times the user has failed to guess correctly after exhausting all guesses)
var guessesLeft = 9; // (# of guesses left. This will update)

// Current guesses will be stored into an array
var currentGuessed = []; // Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)

// Full list of choices computer can choose from
var computerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

// When the player wins, increase the Wins counter and start the game over again (without refreshing the page).

document.onkeyup = function(event) {


	if (event.key === "Meta") {
		console.log(event.key)
		return;	
	}

	// User's & computer guess
	var userGuess = event.key.toLowerCase();
	var computerGuess = computerLetters[Math.floor(Math.random()*computerLetters.length)];

	if (numbers.indexOf(userGuess) !== -1) {
		return alert("You must pick a letter to play!");
	} 

	if (userGuess === computerGuess) { // if user guesses correctly
		wins++;
		console.log("User wins");
		guessesLeft = 9;
		currentGuessed.length = 0;
		document.querySelector(".win").innerHTML = "Wins: " + wins;
	} else if (guessesLeft === 0) { // if user has 0 guesses left and still guessed incorrectly, reset
		losses++;
		console.log("User loses");
		guessesLeft = 9;
		currentGuessed.length = 0;
		document.querySelector(".loss").innerHTML = "Losses: " + losses;
	} else if (userGuess !== computerGuess) { // if user guesses incorrectly, subtract 1 guess left
		guessesLeft--;
	}
	
	currentGuessed.push(userGuess);
	document.querySelector(".alreadyGuessed").innerHTML = currentGuessed + " ";

	}
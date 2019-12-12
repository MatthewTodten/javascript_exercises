//create secretNumber

var secretNumber = 4;

//ask user for guess
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);

//check if user is correct
if(guess === secretNumber){
	alert("Correct!")
}
else if(guess > secretNumber){
	alert("Too high, guess again.")
}

else {
	alert("Too low.")
} 
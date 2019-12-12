var input = prompt("Are we there yet?");
var answer = input.toLowerCase();

while(answer.indexOf("yes") === -1 && answer.indexOf("yeah") === -1) {
	var input = prompt("Are we there yet?");
	var answer = input.toLowerCase();
}

alert("Yay! We made it!")
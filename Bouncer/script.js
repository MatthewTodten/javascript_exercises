var age = prompt("How old are you?");

if (age < 0) {
	alert("Your age cannot violate the laws of physics.")
}

else if(age < 18){
	alert("Sorry, you are not old enough to enter.");
}

else if(age < 21){
	alert("You can come in, let me draw these X's on your hands.");
}

else if(age == 21){
	alert("Happy 21st birth year! Come on in!")
}

else{
	alert("Come on in!");
}

if(age%2 != 0) {
	alert("Your birthday is odd.");
}

if(Number.isInteger(Math.sqrt(age))){
	alert("Perfect Square!");
}
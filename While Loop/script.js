console.log("Example")
//string to loop over
var str = "hello";
//initialize var count;
var count = 0;

//while loop to print string one letter at a time
while(count < str.length) {
	console.log(str[count]);
	count++;
}

var first = -10;
var second = 10;
var third = 301;
var fourth = 5;

console.log("PRINT ALL NUMBERS FROM -10 TO 19.")

while(19 >= first) {
	console.log(first);
	first++;
}

console.log("PRINT ALL EVEN NUMBERS BETWEEN 10 AND 40.")

while(40 >= second) {
	console.log(second);
	second += 2;
}

while(40 >= second){
	if(second % 2 !== 0){
		console.log(second);
	}
	second+1;
}

console.log("PRINT ALL ODD NUMBERS BETWEEN 300 AND 333.")

while(333 >= third) {
	console.log(third);
	third += 2;
}

console.log("PRINT ALL NUMBERS DIVISABLE BY 3 AND 5 BETWEEN 5 AND 50.")

while(50 >= fourth) {
	if(fourth % 3 === 0 && fourth % 5 === 0){
		console.log(fourth)
	}
	fourth += 1;
}
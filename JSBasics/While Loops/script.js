var counter = -10;
while(counter <= 19) {
	console.log(counter);
	counter++;
}

console.log("-----------------------------------------------------------------");

counter = 10;
while(counter <= 41) {
	if(counter % 2 == 0) {
		console.log(counter);
	}
	counter++;
}

console.log("-----------------------------------------------------------------");

counter = 300;
while(counter <= 333) {
	if(counter % 2 != 0) {
		console.log(counter);
	}
	counter++;
}

console.log("-----------------------------------------------------------------");

counter = 5;
while(counter <= 50) {
	if(counter % 5 == 0 && counter % 3 == 0 ) {
		console.log(counter);
	}
	counter++;
}
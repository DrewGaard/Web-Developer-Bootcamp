function isEven(number) {
	if(number % 2 == 0){
		return true;
	}
	return false;
}

console.log("-----------------------------------------------------------------");

function factorial(number) {
	if(number == 0) {
		return 1;
	} else {
		return (number * factorial(number - 1));
	}
}

console.log("-----------------------------------------------------------------");

function kebabToSnake(words) {
	return words.replace(/-/g, "_");
}


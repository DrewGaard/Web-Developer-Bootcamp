function printReverse(reverse) {
	for(var i = reverse.length - 1; i >= 0; i--){
		console.log(reverse[i]);
	}
}

function isUniform(uniform) {
	for(var i = 1; i < uniform.length; i++) {
		if(uniform[0] != uniform[i]){
			return false;
		} 
	}
	return true;
}

function sumArray(sum) {
	var total = 0;
	for(var i = 0; i < sum.length; i++) {
		total = total + sum[i];
	}
	return total;
}

function max(maxArray) {
	var max = maxArray[0];
	for(var i = 1; i < maxArray.length; i++) {
		if(max < maxArray[i]){
			max = maxArray[i];
		}
	}
	return max;
}
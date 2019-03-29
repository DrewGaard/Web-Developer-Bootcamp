var myButton = document.getElementsByTagName("button")[0];

var isColored = false;

myButton.addEventListener("click", function() {
	if(isColored) {
		document.body.style.background = "white";
		isColored = false;
	} else {
		document.body.style.background = "purple";
		isColored = true;
	}
});

//Using a toggle
myButton.addEventListener("click", function() {
	document.body.classList.toggle("purple");
});
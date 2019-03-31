$("button").on("click", function() {
	/*
	$("div").fadeIn(1000, function() {
		$(this).remove();
		console.log("Fade Completed!");
	});
	*/
	
	$("div").slideToggle(1000, function() {
		console.log("SLIDE IS DONE!");
	});
	
});
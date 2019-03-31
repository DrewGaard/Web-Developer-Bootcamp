//Check Off Specific Todos By Clicking
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on("click", "span", function(event) {
    event.stopPropagation();
    $(this).parent().fadeOut(1000, function() {
        $(this).remove();
    })
})

//Hit enter for a new Todo
$("input[type='text']").on("keypress", function(event) {
    if(event.which === 13){
        //Grabbing new todo text from input
        var todoText = $(this).val();
        $(this).val("");
        //Create a new li and add to ul
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
    }
})

//Hide text input
$(".fa-plus").click(function() {
    $("input[type='text']").fadeToggle();
})

// //Check Off Specific Todos By Clicking
// var strikeThrough = {
//     color: "gray",
//     textDecoration: "line-through"
// };

// var deleteStrikeThrough = {
//     color: "black",
//     textDecoration: "none"
// };

// $("li").on("click", function(){
//     //if li is gray
//     if($(this).css("color") === "rgb(128, 128, 128)")
//     {
//         $(this).css(deleteStrikeThrough);
//     } else {
//         $(this).css(strikeThrough);
//     }
//         //turn it black
//     //else
//         //turn it gray
// });
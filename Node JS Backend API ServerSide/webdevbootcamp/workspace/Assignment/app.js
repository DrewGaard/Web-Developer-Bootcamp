var express = require("express");

var app = express();

app.get("/", function(req, res) {
    res.send("Hi there, welcome to my assignment!"); 
});

app.get("/speak/:animal", function(req, res) {
    var animal = req.params.animal;
    
    if(animal === "pig") {
        res.send("The pig says 'Oink'");
    } else if(animal === "cow") {
        res.send("The cow says 'Moo'");
    } else if(animal === "dog") {
        res.send("The cow says 'Woof Woof!'");
    }
});

app.get("/repeat/:id/:number", function(req, res) {
    var id = req.params.id;
    var num = parseInt(req.params.number);
    var totalString = "";
    
    for(var i = 0; i < num; i++) {
        totalString += id + " ";
    }
    
    res.send(totalString);
});

app.get("*", function(req, res) {
   res.send("Sorry, page not found...What are you doing with your life?"); 
});


//Tell Express to listen for requests (start server)
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started!");
});
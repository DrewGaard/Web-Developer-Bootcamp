var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("home");
});


app.get("/fallinlovewith/:thing", function(req, res) {
    var thing = req.params.thing;
    //res.send("You fell in love with " + thing);
    res.render("love", {thingVar: thing});
});

app.get("/posts", function(req, res) {
    var posts = [
            {title: "Post 1", author: "Drew"},
            {title: "Wow look!", author: "Friday"},
            {title: "Click here to learn more!", author: "Bob"}
        ];
        
        res.render("posts", {posts: posts});
});



app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server is listening!!!");
});
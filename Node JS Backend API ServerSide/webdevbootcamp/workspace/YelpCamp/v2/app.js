var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

//mongoose.set("useNewUrlParser", true);
mongoose.connect("mongodb://localhost:27017/yelp_camp", {useNewUrlParser: true});

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs")

//SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//         {
//             name: "Granite Hill", 
//             image: "https://farm7.staticflickr.com/6014/6015893151_044a2af184.jpg",
//             description: "This is a huge granite hill, no bathrooms. No water. Beautiful granite!"
            
//         }, function(err, campground){
//             if(err) {
//                 console.log(err);
//             } else {
//                 console.log("NEWLY CREATED CAMPGROUND: ")
//                 console.log(campground);
//             }
//         });

// var campgrounds = [
//             {name: "Salmon Creek", image: "https://pixabay.com/get/e837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104490f4c37aa0ecb5bb_340.jpg"},
//             {name: "Granite Hill", image: "https://farm7.staticflickr.com/6014/6015893151_044a2af184.jpg"},
//             {name: "Mountain Goat's Rest", image: "https://farm2.staticflickr.com/1363/1342367857_2fd12531e7.jpg"}
//         ];


app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res) {
        //Get all campgrounds from DB
        Campground.find({}, function(err, allCampgrounds) {
             if(err) {
                 console.log(err);
             } else {
                 res.render("index", {campgrounds: allCampgrounds});
             }
        });
        //res.render("campgrounds", {campgrounds: campgrounds});
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new"); 
});

app.post("/campgrounds", function(req, res) {
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = {name: name, image: image, description: desc}
    
    //Create a new campground and save to DB
    Campground.create(newCampground, function(err, newlyCreated) {
       if(err) {
           console.log(err);
       } else {
           res.redirect("/campgrounds");
       }
    });
    
     //get data from form and add to campgrounds array
     //redirect back to campgounds page
});

app.get("/campgrounds/:id", function(req, res) {
    //find the campground with provided ID
    Campground.findById( req.params.id, function(err, foundCampground) {
        if(err){
            console.log(err);
        } else {
            //render show template with that campground
            res.render("show", {campground: foundCampground});
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Yelp Camp Server Started!"); 
});
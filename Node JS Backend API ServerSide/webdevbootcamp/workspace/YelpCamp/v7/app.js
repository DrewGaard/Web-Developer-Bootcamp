var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var Campground = require("./models/campground");
var seedDB = require("./seeds");
var Comment = require("./models/comment");
var passport = require("passport");
var LocalStrategy = require("passport-local");
var User = require("./models/user");

//requiring routes
var commentRoutes = require("./routes/comments"),
    campgroundRoutes = require("./routes/campgrounds"),
    indexRoutes = require("./routes/index")


//seedDB();

//mongoose.set("useNewUrlParser", true);
mongoose.connect("mongodb://localhost:27017/yelp_camp_v6", {useNewUrlParser: true});

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs")

app.use(express.static(__dirname + "/public"));

//PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "This is a great secret for auth",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next) {
    res.locals.currentUser = req.user;
    next();
})

app.use("/", indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);


app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Yelp Camp Server Started!"); 
});
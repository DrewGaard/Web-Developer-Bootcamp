var mongoose = require("mongoose")
mongoose.set("useNewUrlParser", true);
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

//adding a new cat to the DB
// var willey = new Cat({
//     name: "Willey",
//     age: 19,
//     temperament: "friendly"
// });

// willey.save(function(err, cat){
//     if(err){
//         console.log("SOMETHING WENT WRONG");
//     } else {
//         console.log("WE JUST SAVED A CAT TO THE DB");
//         console.log(cat);
//     }
// });


Cat.create({
    name: "Blonde",
    Age: 15,
    temperament: "loyal"
}, function(err, cat) {
    if(err) {
        console.log(err)
    } else {
        console.log(cat);
    }
});


//retrieve all cats from the DB and comsole.log each

Cat.find({}, function(err, cats) {
    if(err) {
        console.log("OH NO, ERROR!");
        console.log(err);
    } else {
        console.log("ALL THE CATS");
        console.log(cats);
    }
});
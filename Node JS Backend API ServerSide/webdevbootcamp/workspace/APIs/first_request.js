var request = require("request");

// request("http://www.google.com", function(error, response, body) {
//     if(error) {
//         console.log("SOMETHING WENT WRONG");
//         console.log(error);
//     } else {
//         if(response.statusCode == 200) {
//             //THINGS WORKED!
//             console.log(body);
//         }
//     }
// });

request("https://jsonplaceholder.typicode.com/todos/1", function(error, response, body) {
    if(!error && response.statusCode == 200) {
        var parsedData = JSON.parse(body);
        console.log(parsedData["title"]);
    } 
});
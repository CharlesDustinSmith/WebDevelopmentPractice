//jshint esversion:6

const express = require("express");

const app = express();

//When someone sends a request to our server by entering the localhost:3000 in web browser this will console log the request and send Hello to the page.
app.get("/", function(request, response){
    console.log(request);
    response.send("<h1>Hello World!!!</h1>");
});

app.get("/contact", function(req, res) {
    res.send("Contace me at: cdsmith@mun.ca");
});

app.get("/about", function(req, res) {
    res.send("My name is Charles Smith and I am undergraduate Computer Engineering Student!!!!");
});
 
//This listen for activities on Port3000
app.listen(3000, function(){
    console.log("Server started on port 3000");
});



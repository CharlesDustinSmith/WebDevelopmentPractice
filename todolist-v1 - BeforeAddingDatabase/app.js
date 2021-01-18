//jshint esversion:6


const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const date = require(__dirname + "/date.js");

const app = express();

let items = [];
let workItems = [];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    
    let day = date.getDate();
    
    res.render("list", {listTitle: day, newListItem: items});

});

app.post("/", function(req, res) {

    const item = req.body.newItem;

    if(req.body.list === "Work-List") {
        workItems.push(item);
        res.redirect("/work");
        console.log(req.body.newItem);
    }
    else {
        items.push(item);
        res.redirect("/");
        console.log(req.body.newItem); 
    }
    
});

app.get("/work", function(req, res) {

    res.render("list", {listTitle: "Work-List", newListItem: workItems})

});

app.post("/work", function(req, res) {

    const item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
    console.log(req.body.newItem);

});

app.get("/about", function(req, res) {
    res.render("about");
});

app.listen(3000, function() {

    console.log("Port 3000 is now active.");   

});

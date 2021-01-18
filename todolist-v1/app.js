//jshint esversion:6


const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

mongoose.connect("mongodb://localhost:27017/todolistDB", {useNewUrlParser: true, useUnifiedTopology: true});

const itemSchema = new mongoose.Schema({
    name: String
});

const Item = mongoose.model("Item", itemSchema);

const item1 = new Item({
    name: "Get your ass up"
});

const item2 = new Item({
    name: "Go and take a bathe"
});

const item3 = new Item({
    name: "Go eat breakfast"
});

const defaultItems = [item1, item2, item3];

const listSchema = new mongoose.Schema({
    name: String,
    items: [itemSchema]
});

const List = mongoose.model("List", listSchema);

app.get("/", function(req, res) {

    Item.find({}, function(err, foundItems) {
        if(foundItems.length < 1 || foundItems === undefined) {
            Item.insertMany(defaultItems, function(err) {
                if(err) {
                    console.log(err);
                } else {
                    console.log("Successfully saved default items to database...")
                }
            });
            res.redirect("/");    
        } else {
            //console.log(foundItems);
            res.render("list", {listTitle: "Today", newListItem: foundItems});
        }
    });

});

app.post("/", function(req, res) {

    const itemName = req.body.newItem;
    const listName = req.body.listName;

    if(listName === "Today") {
        item.save();
        res.redirect("/");
    } else {
        list.findOne({name: listName}, function(err, foundList){
            foundList.items.push(item);
            foundList.save();
            res.redirect("/" + listName);
        });
    }
    const item = new Item({
        name: itemName
    });

    item.save();
    res.redirect("/");
});

app.post("/delete", function(req, res) {
    const checkedItemId = req.body.checkbox;
    
    Item.findByIdAndRemove(checkedItemId, function(err) {
        if(err) {
            console.log(err);
        } else {
            console.log("Successfully deleted...")
        }
    });
    
    res.redirect("/");
});

app.get("/work", function(req, res) {

    res.render("list", {listTitle: "Work-List", newListItem: workItems});

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

app.get("/:customListName", function(req, res) {
    console.log(req.params.customListName);

    List.findOne({name: req.params.customListName}, function(err, foundList) {
        if(err) {
            console.log(err);
        } else {
            if(!foundList) {
                const list = new List({
                    name: req.params.customListName,
                    items: defaultItems
                });
            
                list.save();
                res.redirect("/" + req.params.customListName);

            } else {
                res.render("list", {listTitle: foundList.name, newListItem: foundList.items});
            }
        }
    });
});






app.listen(3000, function() {

    console.log("Port 3000 is now active.");   

});

//jshint esversion:6

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true, useUnifiedTopology: true });

const fruitSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, "Check your data entry , no name was specified..."]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    name: "Apple",
    rating: 4,
    review: "Pretty solid as a fruit."
});

fruit.save();

// const kiwi = new Fruit({
//     name: "Kiwi",
//     rating: 10,
//     review: "The best fruit!"
// });

// const orange = new Fruit({
//     name: "Orange",
//     rating: 4,
//     review: "Too sour for me"
// });

// const banana = new Fruit({
//     name: "banana",
//     rating: 3,
//     review: "Weird texture"
// });

// Fruit.insertMany([kiwi, orange, banana], function(err){
//     if(err) {
//         console.log(err);
//     } else {
//         console.log("Successfully saved all fruits to fruitsDB");
//     }
// });

const peopleSchema = new mongoose.Schema({
    name: String,
    age: Number, 
    favoriteFruit: fruitSchema
});

// const pineapple = new Fruit({
//     name: "Pinapple", 
//     rating: 9,
//     review: "Great fruit"
// });

// pineapple.save();

// const person = new People({
//     name: "Amy",
//     age: 12,
//     favoriteFruit:  pineapple
// });

const mango = new Fruit({
    name: "Mango", 
    rating: 6,
    review: "Decent fruit."
});

mango.save();

People.updateOne({name: "John"}, {favoriteFruit: mango},  function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("Successfully updated...");
    }
});

const People = mongoose.model("Person", peopleSchema);

const people = new People({
    name: "Charles Smith",
    age: 24
});
// people.save();

Fruit.find(function(err, fruits) {
    if(err) {
        console.log(err);
    } else {
        console.log(fruits);
        mongoose.connection.close();

        fruits.forEach(function(fruit) {
            console.log(fruit.name);
        });
    }
});

// Fruit.updateOne({_id: "5f97a02d3c5dfb31a01a1ba6"}, {name: "Peach"}, function(err) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log("Successfully updated the document...");
//     }
// });

Fruit.deleteOne({name: "Peach"}, function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("Successfully deleted the document...");
    }
});

People.deleteMany({name: "John"}, function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("Successfully deleted the documents...");
    }
})
//jshint esversion:6


const fs = require("fs");
var superheroes = require("superheroes");
var supervillains = require("supervillains");

var mySuperHeroName = superheroes.random();
var mySuperVillainName = supervillains.random();

console.log("My Super Hero name is " + mySuperHeroName);
console.log("My Super Villian name is " + mySuperVillainName);

fs.copyFileSync("file1.txt", "file2.txt");
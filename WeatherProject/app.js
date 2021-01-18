const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
    console.log(req.body.cityName);
    console.log("Post request recieved");

    const query = req.body.cityName;
    const apiKey = "12dff2d6839b784e18a7bdbc6d4098d6";
    const unit = "imperial";

    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&units=" + unit +"&appid=" + apiKey;

    https.get(url, function(response) {
        console.log(response.statusCode);

        response.on("data", function(data) {
            const weatherData = JSON.parse(data);
            console.log(weatherData);
            
            const temperature = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
            
            res.write("<h1>The temperature in " + query + " is " + temperature + " degrees Fahrenheit." + "</h1>");
            res.write("<p>The weather is currently " + weatherDescription + "</p>");
            res.write("<img src=" + imageURL + ">");
            res.send();
            //console.log(data);
        });
    });
});






app.listen(3000, function() {console.log("Port 3000 is now active.")});
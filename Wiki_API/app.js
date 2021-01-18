//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose"); 

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikiDB", {useNewUrlParser: true, useUnifiedTopology: true});

const wikiSchema = new mongoose.Schema({
    title: String,
    content: String
});

const Article = mongoose.model("Article", wikiSchema);

///////////////////////////////////////////////Request targeting all articles////////////////////////////////

app.route("/articles")
.get(function(req, res) {
    Article.find(function(err, foundArticles) {
        if(err) {
            console.log(err);
        } 
        else {
            console.log(foundArticles);
        }
    });
})
.post(function(req, res) {
    const title = req.body.title;
    const content = req.body.content;

    const newArticle = new Article({
        title: title,
        content: content
    });

    newArticle.save(function(err) {
        if(err) {
            res.send(err);
        } else {
            res.send("Successfully added to the database...");
        }
    });
})
.delete(function(req, res) {
    Article.deleteMany(function(err) {
        if(err) {
            res.send(err);
        } else {
            res.send("Successfully deleted everything...");
        }
    });
});


// app.get("/articles", function(req, res) {
//     Article.find(function(err, foundArticles) {
//         if(err) {
//             console.log(err);
//         } 
//         else {
//             console.log(foundArticles);
//         }
//     });
// });

// app.post("/articles", function(req, res) {
//     const title = req.body.title;
//     const content = req.body.content;

//     const newArticle = new Article({
//         title: title,
//         content: content
//     });

//     newArticle.save(function(err) {
//         if(err) {
//             res.send(err);
//         } else {
//             res.send("Successfully added to the database...");
//         }
//     });
// });

// app.delete("/articles", function(req, res) {
//     Article.deleteMany(function(err) {
//         if(err) {
//             res.send(err);
//         } else {
//             res.send("Successfully deleted everything...");
//         }
//     });
// });
//Removed because of redundancy (above is a chainable way of doing this.);

//////////////////////////////////////Request Targeting Specific A rticles///////////////////////////////////////

app.route("/article/:articleTitle")
.get(function(req, res) {
    Article.findOne({title: req.params.articleTitle}, function(err,foundArticle) {
        if(err) {
            res.send(err);
        } else if(foundArticle) {
            res.send(foundArticle);
        } else {
            res.send("No articles found...");
        }
    });
})
.put(function(req, res) {
    Article.update(
        {title: req.params.articleTitle},
        {title: req.body.title, content: req.body.content},
        {overwrite: true},
        function(err) {
            if(err) {
                res.send(err);
            } else {
                res.send("Successfully updated article...");
            }
        });
})
.patch(function(req, res) {
    Article.update(
        {title: req.params.articleTitle},
        {$set: req.body},
        function(err) {
            if(err) {
                res.send(err);
            } else {
                res.send("Successfully updated specific field...");
            }
        }
    );
})
.delete(function(req, res) {
   Article.deleteOne(
       {title: req.params.articleTitle},
       function(err) {
           if(err) {
               res.send(err);
           } else {
               res.send("Successfully deleted specific article...");
           }
       }
   );
});

app.listen(3000, function() {
    console.log("Server is live on Port 3000...");
});
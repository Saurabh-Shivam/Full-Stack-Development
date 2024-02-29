const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikiDB", {
    useNewUrlParser: true
});

const articleSchema = {
    title: String,
    content: String
};

const Article = mongoose.model("Article", articleSchema);

// RESTful API CREATION WITH THE HELP OF THUNDER-CLINT/POSTMAN

//  CHAINED ROUTE HANDLERS USING EXPRESS
/******************** REQUESTS TARGETING ALL ARTICLES************************ */

app.route("/articles")

    // GETTING ALL THE ARTICLES
    .get(function (req, res) {

        Article.find(function (err, foundArticles) {
            // console.log(foundArticles);
            if (!err) {
                res.send(foundArticles);
            } else {
                res.send(err);
            }

        });
    })

    //POSTING A NEW ARTICLE 
    .post(function (req, res) {
        // console.log(req.body.title);
        // console.log(req.body.content);
        const newArticle = new Article({
            title: req.body.title,
            content: req.body.content
        });

        newArticle.save(function (err) {
            if (!err) {
                res.send("Successfully added a new article.")
            } else {
                res.send(err);
            }
        });

    })

    // DELETING ALL THE  ARTICLES
    .delete(function (req, res) {
        Article.deleteMany(function (err) {
            if (!err) {
                res.send("Successfully deleted all the articles.")
            } else {
                res.send(err);
            }
        });
    });


// app.get('/articles', );
// app.post('/articles', );
// app.delete("/articles", );

/******************** REQUESTS TARGETING SPECIFIC ARTICLES************************ */

app.route("/articles/:articleTitle")

    // GETTING AN ARTICLES
    .get(function (req, res) {

        Article.findOne({
            title: req.params.articleTitle
        }, function (err, foundArticle) {
            if (foundArticle) {
                res.send(foundArticle);
            } else {
                res.send(err);
            }
        });
    })

    // UPDATING AN ARTICLE(ALL) -> Having problem in this
    .put(function (req, res) {
        Article.updateOne({
            title: req.params.articleTitle
        }, {
            title: req.body.title,
            content: req.body.content
        }, function (err) {
            if (!err) {
                res.send("Successfully updated the article.");
            }
        });
    })

    // PATCH A SPECIFIC ARTICLE
    .patch(function (req, res) {
        Article.update(

            {
                title: req.params.articleTitle
            }, {
                $set: req.body
            },
            function (err) {
                if (!err) {
                    res.send("Successfully updated article.")
                } else {
                    res.send(err);
                }
            }
        );
    })

    // DELETE A SPECIFIC ARTICLE
    .delete(function (req, res) {
        Article.deleteOne({
                title: req.params.articleTitle
            },
            function (err) {
                if (!err) {
                    res.send("Successfully deleted the corresponding article.")
                } else {
                    res.send(err);
                }
            }
        );
    });



app.listen(3000, function () {
    console.log("Server started on port 3000");
});
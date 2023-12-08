const express = require("express");
const bcrypt = require("bcrypt");
const mysql = require("mysql");
const NewsAPI = require("newsapi");
var ejs = require("ejs");

// API key for NewsAPI
// Taken from https://newsapi.org/docs/client-libraries/node-js
const newsapi = new NewsAPI("1b2126a8fae545d7b6fba9fb0d7471dd");

console.log("Imported all modules successfully");

const app = express();
const port = 3000;

//TODO deal with packets error thing
// const db = mysql.createConnection(
//     {
//         host: "localhost",
//         user: "root",
//         password: "iluvatar16",
//         database: "myBlogData",
//         port: "3000"
//     });

// db.connect((err) =>
// {
//     if (err)
//     {
//         console.log(err);
//         throw err;
//     }
//     console.log("Connected to database successfully!");
// });

// global.db = db;


//Templating engine
app.set("view engine", "ejs");
app.engine("html", ejs.renderFile);

// Views folder
app.set("views", __dirname + "/views");

// Require main route for all pages
require("./routes/main")(app, bcrypt);

// Start web app
app.listen(port, () => { console.log(`hello! your app is listening on port ${port}!`); });









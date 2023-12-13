const express = require("express");
const mysql = require("mysql");
const dotenv = require("dotenv");
const session = require("express-session");

// const bcrypt = require("bcrypt");
const NewsAPI = require("newsapi");
let ejs = require("ejs");

// Sensitive information for accessing the database
dotenv.config(
    {
        path: "./.env"
    });

// API key for NewsAPI
// Taken from https://newsapi.org/docs/client-libraries/node-js
const newsapi = new NewsAPI("1b2126a8fae545d7b6fba9fb0d7471dd");
const app = express();
const port = 3000;
console.log("Imported all modules successfully");


//TODO deal with packets error thing
const db = mysql.createConnection(
    {
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE

        //TODO remove dummy database
        // password: "iluvatar16",
        // database: "myBlogData",
        // port: "3000"
    });

db.connect((err) =>
{
    if (err)
    {
        console.log(err);
        throw err;
    }
    console.log("Connected to database successfully!");
});

// global.db = db;


//Templating engine
app.set("view engine", "ejs");
app.engine("html", ejs.renderFile);

// Views folder
app.set("views", __dirname + "/views");

// Require main route for all pages
// require("./routes/main")(app, bcrypt);
require("./routes/main")(app);

// Start web app
app.listen(port, () =>
{
    console.log(`hello! your app is listening on port ${port}!`);
});









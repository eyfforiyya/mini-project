const express = require("express");

const dotenv = require("dotenv");
let ejs = require("ejs");



// const NewsAPI = require("newsapi");

// Sensitive information for accessing the database
// dotenv.config(
//     {
//         path: "./.env"
//     });

// API key for NewsAPI
// Taken from https://newsapi.org/docs/client-libraries/node-js
// const newsapi = new NewsAPI("1b2126a8fae545d7b6fba9fb0d7471dd");
const app = express();
const port = 3000;
// console.log("Imported all modules succeyssfully");

//Templating engine
app.set("view engine", "ejs");
app.engine("html", ejs.renderFile);

// Define the routes
const aboutRoute = require("./routes/about");
app.use("/about", aboutRoute);

const registerRoute = require("./routes/register");
app.use("/register", registerRoute);

// app.use("/auth", require("./routes/auth"));

app.get("/", (req, res) =>
{
    res.render("main");
});

// Page not found
app.get("*", (req, res) =>
{
    res.send("404! This page doesn't exist :(");
});


// Start web app
app.listen(port, () =>
{
    console.log(`hello! your app is listening on port ${port}!`);
});


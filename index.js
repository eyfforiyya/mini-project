const express = require("express");
const dotenv = require("dotenv");
let ejs = require("ejs");
const connectDB = require("./db.js");

// API key for NewsAPI
// Taken from https://newsapi.org/docs/client-libraries/node-js
const NewsAPI = require("newsapi");
const newsapi = new NewsAPI("1b2126a8fae545d7b6fba9fb0d7471dd");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to the database
connectDB();

//Templating engine
app.set('views', './views');
app.set("view engine", "ejs");

// Define the routes
const aboutRoute = require("./routes/about");
app.use("/about", aboutRoute);

const userRoute = require("./routes/user");
app.use("/user", userRoute);

const registerRoute = require("./routes/register");
app.use("/register", registerRoute);

const authRoute = require("./routes/auth");
app.use("/auth", authRoute);

const newsRoute = require("./routes/news");
app.use("/news", newsRoute);


app.get("/", (req, res) =>
{
    res.render("main", { title: "Homepage" });
});

// Page not found
app.get("*", (req, res) =>
{
    res.send("404! This page doesn't exist :(");
});


// Start web app
app.listen(PORT, () =>
{
    console.log(`hello! your app is listening on port ${PORT}! ------------------------------------`);
});


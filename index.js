const express = require("express");
const bcrypt = require("bcrypt");
const mysql = require('mysql');
var ejs = require('ejs')

console.log("Imported all modules successfully");

const app = express();
const port = 3000;

// TODO create connection to database


//Templating engine
app.set("view engine", "ejs");
app.engine('html', ejs.renderFile);

// Views folder
app.set("views", __dirname + "/views");

// Routes
require("./routes/main")(app, bcrypt);

// Start web app
app.listen(port, () => { console.log(`hello! your app is listening on port ${port}!`); });









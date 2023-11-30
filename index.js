const express = require("express");
const app = express();
const port = 3000;

const userRoutes = require('./routes/user');
const aboutRoutes = require('./routes/about');

app.set("view engine", "ejs");

// links to other parts of the site go here (in this case, Authors and Readers thingy)
app.get("/", (req, res) =>
{
    res.render("index.js")
});

app.use('/user', userRoutes);
app.use('/reader', aboutRoutes);

app.listen(port, () => { console.log(`mortal, your app is listening on port ${port}!`); });


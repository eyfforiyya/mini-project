const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

// links to other parts of the site go here (in this case, Authors and Readers thingy)
app.get("/", (req, res) => { res.render("main") });

app.listen(port, () => { console.log(`mortal, your app is listening on port ${port}!`); });


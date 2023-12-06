const express = require("express");
const about = express.Router();

about.get("/", (req, res, next) =>
{
    res.render("about");
});

module.exports = about;
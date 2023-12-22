const express = require("express");
const about = express.Router();

about.get("/", (req, res, next) =>
{
    res.render("about"); //inside views folder
});

module.exports = about;
const express = require("express");
const parser = require("body-parser");
const register = express.Router();
let encoder = parser.urlencoded({ extended: false });

register.get("/", (req, res, next) =>
{
    res.render("register");
});

register.post("register", encoder, (req, res) =>
{
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var username = req.body.username;
    var password = req.body.password;
});


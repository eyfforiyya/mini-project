const express = require("express");
const parser = require("body-parser");
// let encoder = parser.urlencoded({ extended: false });
const register = express.Router();

register.get("/", (req, res, next) =>
{
    res.render("register");
});

// register.post("register", encoder, (req, res) =>
// {
//     var firstName = req.body.firstName;
//     var lastName = req.body.lastName;
//     var username = req.body.username;
//     var password = req.body.password;
// });

module.exports = register;


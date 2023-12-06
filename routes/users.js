const express = require("express");
const users = express.Router();
const assert = require("assert");

users.get("/", (req, res, next) =>
{
    res.render("users");
});

users.get("/register", (req, res) =>
{
    res.render("create-user-record");
});


module.exports = users;

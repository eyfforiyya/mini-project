const express = require("express");
const { register } = require("../controllers/authControl");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user");

const registrationRouter = express.Router();

registrationRouter.get("/", (req, res, next) =>
{
    res.render("register", { title: "Register!" });
});

// registrationRouter.post("/register", register);

module.exports = registrationRouter;


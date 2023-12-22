const express = require("express");
const { register } = require("../controllers/authControl");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");


express.urlencoded({ extended: true });
express.json();

const registrationRouter = express.Router();

registrationRouter.get("/", (req, res, next) =>
{
    res.render("register", { title: "Register!" });
});

registrationRouter.post("/auth/register", register);

module.exports = registrationRouter;


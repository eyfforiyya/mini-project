// const jwt = require("jsonwebtoken");
const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/user");

express.urlencoded({ extended: true });
express.json();

// If user is registered already, log in
const login = async (req, res, next) =>
{
    const { username, password } = req.body;

    try
    {
        // Query the database to find if the user entered exists
        const user = await User.findOne({ username });
        if (!user)
        {
            return res.status(404).json({ message: "User does not exist :(" });
        }

        // If the user exists, compare the password to the one associated to the user
        const passwordEntered = await user.comparePassword(password);
        if (!passwordEntered)
        {
            return res.status(401).json({ message: "Wrong password!" });
        }


        const token = jwt.sign(
            { userId: user._id },
            process.env.SECRET_KEY,
            { expiresIn: "1 hour" });

        res.json({ token });
    }
    catch (err)
    {
        next(err);
    }
};

// Create a new user
const register = async (req, res, next) =>
{
    console.log("is this working??????");
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var email = req.body.email;
    var username = req.body.username;
    var password = req.body.password;

    try 
    {
        var saltRounds = 10;
        console.log(req.body);
        // Generate the hashed password using the given passsword and the default number of salt rounds
        const hashed = await bcrypt.hash(password, saltRounds);
        const user = new User({ firstName, lastName, email, username, password: hashed });

        await user.save();

        res.json({ message: "Registered new user successfully! :)" });
        res.send("Registered!!!!");

    }
    catch (err)
    {
        next(err);
    }
};


module.exports = { register, login };
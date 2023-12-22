const express = require("express");
const { authenticate } = require("../middlewares/authMiddle");

const userAuth = express.Router();

userAuth.get("/profile", authenticate, (req, res) =>
{
    res.json({ message: `Welcome ${req.user.username}` });
});

module.exports = userAuth;
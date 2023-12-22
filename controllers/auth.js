const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user');

// If user is registered already, log in





// Create a new user
const register = async (req, res, next) =>
{
    const { username, email, password } = req.body;

    try 
    {
        // Generate the hashed password using the given passsword and the default salt rounds
        const hashed = await bcrypt.hash(password, 10);
        const user = new User({ username, email, password: hashed });
        await user.save();

        res.json({ message: "Registered new user successfully! :)" });
    }
    catch (err)
    {
        next(err);
    }
};
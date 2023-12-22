const mongoose = require("mongoose");
require("dotenv").config();

// Create the connection to the database
const connect = async () =>
{
    console.log("connecting to database");
    try
    {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log(" Successfully connected to database :)");
    }
    catch (err)
    {
        console.log("Error connecting to database :(    ", err);
    }
};

module.exports = connect;
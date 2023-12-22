const mongoose = require("mongoose");
require("dotenv").config();

// Create the connection to the database
const connect = async () =>
{
    try
    {
        await mongoose.connect(process.env.MONGODB_URI,
            {
                userNewUrlParser: true,
                userUnifiedTopology: true,
                useCreateIndex: true,
                useFindAndModify: false
            });
        console.log(" Successfully connected to database :)");
    }
    catch (err)
    {
        console.log("Error connecting to database :(");
    }
};

module.exports = connect;
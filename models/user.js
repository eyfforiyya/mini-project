const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// Describe the information that will be stored for a single user. his will be the structure for Users
const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        username: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: String,
            enum: ['user', 'admin'],
            default: 'user'
        }
    },
    { timestamps: true }
);

// We hash the password before storing it in the database
userSchema.pre("save", async function (next)
{
    const user = this;

    //Check if the path has changed?? TODO check this
    if (!user.isModified("password"))
    {
        return next();
    };

    try
    {
        const salt = await bcrypt.genSalt(); // The default salt rounds is 10 so we don't pass this function any new rounds number
        user.password = await bcrypt.hash(user.password, salt);
        next();
    }
    catch (err)
    {
        return next(err);
    };
});

//Compare the hashed password with the password that was entered
userSchema.methods.comparePassword = async function (password)
{
    return bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
module.exports = function (app, bcrypt)
{
    // TODO Session access
    // https://www.npmjs.com/package/express-session

    const redirectLogin = (req, res, next) =>
    {
        if (!req.session.userId)
        {
            res.redirect("./login");
        }
        else
        {
            next();
        }
    }

    // Route handling
    // Home
    app.get("/", (req, res) =>
    {
        res.render("index.ejs");
    });

    // About page
    app.get("/about", (req, res) =>
    {
        res.render("about.ejs");
    });

    // Register user
    app.get("/register", (req, res) =>
    {
        res.render("register.ejs");
    });

    // Search
    app.get("/search", (req, res) =>
    {
        res.render("search.ejs");
    });

    // Search result
    // app.get("/search-result", (req, res) =>
    // {
    //     // TODO add search result page
    // });

    // Not found
    app.get("*", (req, res) =>
    {
        res.send("404! This page doesn't exist :(");
    });




}
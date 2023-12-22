
const express = require("express");
const NewsAPI = require("newsapi");

const news = express.Router();
const axios = require("axios");

const newsapi = new NewsAPI("1b2126a8fae545d7b6fba9fb0d7471dd");


news.get("/", async (req, res) =>
{
    try
    {
        const url = `https://newsapi.org/v2/everything?q=general&apiKey=${"1b2126a8fae545d7b6fba9fb0d7471dd"}`;
        const response = await axios.get(url);
        const newsData = response.data;

        res.render("news", { content: newsData });
    }
    catch (err)
    {
        res.status(500).send(err.message);
    }
});

module.exports = news;
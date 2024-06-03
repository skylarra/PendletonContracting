import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import serverless from "serverless-http";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.render( __dirname + "/views/home.ejs");
});

app.get("/about", (req, res) => {
    res.render( __dirname + "/views/about.ejs");
});

app.get("/services", (req, res) => {
    res.render( __dirname + "/views/service.ejs");
});

app.get("/contact", (req, res) => {
    res.render( __dirname + "/views/contact.ejs");
});

module.exports.handler = serverless(app);

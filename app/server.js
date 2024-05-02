import express from "express";
import sqlite3 from "sqlite3";
const app = express();
const port = 3000;
app.set("view engine", "ejs");
app.set("views", "app/public/views");
app.use(express.static("app/public"));
app.get("/", (req, res) => {
    res.render("index");
});
app.get("/home", (req, res) => {
    res.send("<div>This will eventually be a template with hero content in it!</div>");
});
app.get("/projects", (req, res) => {
    res.send(`<div>This is your project content</div>`);
});
app.get("/about", (req, res) => {
    res.send(`<div>This is your about content</div>`);
});
app.get("/contact", (req, res) => {
    res.send(`<div>This is your contact form content</div>`);
});
app.get("/downloadcv", (req, res) => {
    res.redirect("/assets/filesToSend/SoftwareCV.pages");
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
app.get("/openDb", (req, res) => {
    const db = new sqlite3.Database("/db/portfolio.db", (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log("Connected to portfolio.db SQlite database.");
    });
    db.close((err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log("Close the database connection.");
    });
});
//# sourceMappingURL=server.js.map
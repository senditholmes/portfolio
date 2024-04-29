import express from "express";
import serveStatic from "serve-static";
import sqlite3 from "sqlite3";

const app = express();
const port = 3000;

// MIDDLEWARE
app.use(
  serveStatic("/Users/djh/Projects/portfolio/public", {
    index: ["index.html", "index.htm"],
  })
);

//DATABASE
app.get("/openDb", (req, res) => {
  const db = new sqlite3.Database(
    "/Users/djh/Projects/portfolio/db/portfolio.db",
    (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log("Connected to portfolio.db SQlite database.");
    }
  );
  db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Close the database connection.");
  });
});

// GET ROUTES
app.get("/home", (req, res) => {
  console.log(res);
  res.send(`<div>This is your HERO content</div>`);
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

// LISTEN
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

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

//DATABASE CONNECTION (MEMORY)
const db = new sqlite3.Database(":memory:", (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Connected to the in-memory SQlite database.");
});
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Close the database connection.");
});

// ROUTES
app.get("/test", (req, res) => {
  res.send(`Response goes here`);
});

// LISTEN
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

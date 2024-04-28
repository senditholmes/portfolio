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

// ROUTES
app.get("/getProjects", (req, res) => {
  const db = new sqlite3.Database(
    "/Users/djh/Projects/portfolio/db/portfolio.db",
    (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log("Connected to portfolio.db SQlite database.");
    }
  );

  db.serialize(() => {
    db.each(`SELECT * FROM portfolio`, (err, row: any) => {
      if (err) {
        console.error(err.message);
      }
      res.send(`<div> Project name is: ${row.ProjectName}</div>`);
    });
  });

  //CLOSE SNIPPET
  db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Close the database connection.");
  });
});

// LISTEN
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

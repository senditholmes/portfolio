import express from "express";
import serveStatic from "serve-static";
import sqlite3 from "sqlite3";
const app = express();
const port = 3000;
app.use(serveStatic("/Users/djh/Projects/portfolio/public", {
    index: ["index.html", "index.htm"],
}));
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
app.get("/test", (req, res) => {
    res.send(`Response goes here`);
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
//# sourceMappingURL=server.js.map
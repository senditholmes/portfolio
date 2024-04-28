import express from "express";
import serveStatic from "serve-static";

const app = express();
const port = 3000;

// MIDDLEWARE
app.use(
  serveStatic("/Users/djh/Projects/portfolio/public", {
    index: ["index.html", "index.htm"],
  })
);

// ROUTES
app.get("/test", (req, res) => {
  res.send(`Response goes here`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

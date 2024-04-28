import express from "express";
import serveStatic from "serve-static";
const app = express();
const port = 3000;
app.use(serveStatic("/Users/djh/Projects/portfolio/public", {
    index: ["index.html", "index.htm"],
}));
app.get("/test", (req, res) => {
    res.send(`<h1> Here is your example HTML response buddy! </h1>`);
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
//# sourceMappingURL=server.js.map
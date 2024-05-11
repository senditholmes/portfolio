import express from "express";
import "dotenv/config";
import { Octokit } from "octokit";
const app = express();
const port = process.env.PORT;
const octokit = new Octokit({
    auth: process.env.ACCESS_TOKEN,
});
app.use(express.static("./public"));
app.get("/home", (req, res) => {
    res.send(`<div> Hero </div>`);
});
app.get("/projects", (req, res) => {
    console.log(`HTMX REQUEST RECEIVED`);
    async function getRepos() {
        try {
            const repos = await octokit.request("GET /users/{user}/repos", {
                headers: {
                    "X-GitHub-Api-Version": "2022-11-28",
                },
                user: "senditholmes",
            });
            res.send(`<div> Projects test</div>`);
            console.log(repos);
        }
        catch (error) {
            console.log(error);
        }
    }
    getRepos();
});
app.get("/about", (req, res) => {
    res.send(`<div> About </div>`);
});
app.get("/contact", (req, res) => {
    res.send(`<div> Contact </div>`);
});
app.get("/downloadCv", (req, res) => {
    res.download("app/public/assets/filesToSend/SoftwareCV.pdf");
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
//# sourceMappingURL=server.js.map
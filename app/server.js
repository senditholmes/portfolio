import express from "express";
import "dotenv/config";
import { Octokit } from "octokit";
const app = express();
const port = process.env.PORT;
const octokit = new Octokit({
    auth: process.env.ACCESS_TOKEN,
});
app.use(express.static("public"));
app.use(express.json());
app.set("view engine", "ejs");
app.get("/", async (req, res) => {
    try {
        const repoResponse = await octokit.request("GET /users/{user}/repos", {
            headers: {
                "X-GitHub-Api-Version": "2022-11-28",
            },
            user: "senditholmes",
        });
        var repos = repoResponse.data;
    }
    catch (error) {
        console.log(error);
    }
    if (repos) {
        repos.forEach((repo) => {
            repo.url = "https://github.com" + repo.url.substring(28, repo.url.length);
            repo.created_at = repo.created_at.substring(0, 10);
        });
        res.render("pages/index", { repos });
    }
    else {
        res.render("pages/index");
    }
});
app.get("/projects", (req, res) => { });
app.post("/contact", (req, res) => {
    const formUserInput = req.body;
    res.send(formSubmissionThankyou);
});
app.get("/downloadCv", (req, res) => {
    res.download("./public/assets/filesToSend/SoftwareCV.pdf");
});
app.post("/message", (req, res) => {
    return;
});
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
const formSubmissionThankyou = `<div>Thanks for contacting me. I will get back to you asap!</div>`;
//# sourceMappingURL=server.js.map
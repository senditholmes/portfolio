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
app.use(express.urlencoded());
app.get("/projects", (req, res) => {
    console.log(`REPO REQUEST RECEIVED`);
    async function getRepos() {
        try {
            const repoResponse = await octokit.request("GET /users/{user}/repos", {
                headers: {
                    "X-GitHub-Api-Version": "2022-11-28",
                },
                user: "senditholmes",
            });
            const repos = repoResponse.data;
            res.send(`
      
        ${repos
                .map((repo) => `<li class="h-28 flex flex-col flex-wrap">${repo.name}, ${repo.language}, ${repo.url}, ${repo.created_at}</li>`)
                .join("")}
      
      `);
        }
        catch (error) {
            console.log(error);
            res.send(`<div>Unable to fetch repos</div>`);
        }
    }
    getRepos();
});
app.post("/contact", (req, res) => {
    const formUserInput = req.body;
    res.send(formSubmissionThankyou);
});
app.get("/downloadCv", (req, res) => {
    res.download("./public/assets/filesToSend/SoftwareCV.pdf");
});
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
const formSubmissionThankyou = `<div>Thanks for contacting me. I will get back to you asap!</div>`;
//# sourceMappingURL=server.js.map
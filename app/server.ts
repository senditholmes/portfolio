import express from "express";
import "dotenv/config";
import { Octokit } from "octokit";
import { join } from "path";

const app = express();
const port = process.env.PORT;
const octokit = new Octokit({
  auth: process.env.ACCESS_TOKEN,
});

interface Repo {
  name: string;
  url: string;
  created_at: string;
  language: string;
}
// MIDDLEWARE
app.use(express.static("./public"));
app.use(express.json());

// ROUTES
app.get("/home", (req, res) => {
  res.send(`<div> Hero </div>`);
});

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
      const repos: Repo[] = repoResponse.data;

      res.send(`
      <ul>
   
      ${repos
        .map(
          (repo) =>
            `<li>${repo.name}, ${repo.language}, ${repo.url}, ${repo.created_at} </li>`
        )
        .join("")}
      </ul>
      `);
    } catch (error) {
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

// LISTEN
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

import express from "express";
import "dotenv/config";
import { Octokit } from "octokit";

const app = express();
const port = process.env.PORT;
const octokit = new Octokit({
  auth: process.env.ACCESS_TOKEN,
});

// TYPES
interface Repo {
  name: string;
  url: string;
  created_at: string;
  language: string;
}

interface FormSchema {
  name: string;
  phone: string | "";
  email: string;
  comment: string | "";
}

// MIDDLEWARE
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded());

// ROUTES

// Projects
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
              `<li>${repo.name}, ${repo.language}, ${repo.url}, ${repo.created_at}</li>`
          )
          .join("")}
      </ul>
      `);
    } catch (error) {
      console.log(error);
      res.send(`<div>Unable to fetch repos</div>`);
    }
  }

  getRepos();
});

// Contact Form
app.post("/contact", (req, res) => {
  const formUserInput: FormSchema = req.body;
  res.send(formSubmissionThankyou);
});

// Download Logic

app.get("/downloadCv", (req, res) => {
  res.download("./public/assets/filesToSend/SoftwareCV.pdf");
});

// SERVER START

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// TEMPLATES
const formSubmissionThankyou = `<div>Thanks for contacting me. I will get back to you asap!</div>`;

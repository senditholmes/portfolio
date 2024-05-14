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
      res.send(`<div>Unable to fetch repos</div>`);
    }
  }

  getRepos();
});

app.get("/about", (req, res) => {
  res.send(`
  <div class="flex flex-col">
  <h1 class="pb-3">Daniel Holmes - Fullstack Engineer</h1>
  <ul class="flex">
    <li>
      <h2>Frontend</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        molestias quam non deserunt atque inventore? Modi ducimus dolore placeat
        reiciendis, accusamus eveniet alias obcaecati cum doloremque fuga, ut,
        neque sunt!
      </p>
    </li>

    <li>
      <h2>Backend</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        molestias quam non deserunt atque inventore? Modi ducimus dolore placeat
        reiciendis, accusamus eveniet alias obcaecati cum doloremque fuga, ut,
        neque sunt!
      </p>
    </li>

    <li>
      <h2>Data Analysis and Database Management</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        molestias quam non deserunt atque inventore? Modi ducimus dolore placeat
        reiciendis, accusamus eveniet alias obcaecati cum doloremque fuga, ut,
        neque sunt!
      </p>
    </li>

    <li>
      <h2>Teaching Professional</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        molestias quam non deserunt atque inventore? Modi ducimus dolore placeat
        reiciendis, accusamus eveniet alias obcaecati cum doloremque fuga, ut,
        neque sunt!
      </p>
    </li>
  </ul>
</div>

   
  `);
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

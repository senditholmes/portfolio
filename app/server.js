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
            const repos = repoResponse.data;
            res.send(`
      <ul>
        ${repos
                .map((repo) => `<li>${repo.name}, ${repo.language}, ${repo.url}, ${repo.created_at}</li>`)
                .join("")}
      </ul>
      `);
        }
        catch (error) {
            console.log(error);
            res.send(`<div>Unable to fetch repos</div>`);
        }
    }
    getRepos();
});
app.get("/about", (req, res) => {
    res.send(about_template);
});
app.get("/contact", (req, res) => {
    res.send(contact_form);
});
app.post("/contact", (req, res) => {
    const formUserInput = req.body;
    res.send(form_submission_thankyou);
});
app.get("/downloadCv", (req, res) => {
    res.download("./public/assets/filesToSend/SoftwareCV.pdf");
});
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
const about_template = `
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
`;
const contact_form = `<form hx-post="/contact" hx-trigger="submit" hx-target="#display-content" hx-swap="beforeend">
<div>
  <label for="name">Name</label>
  <input name="name" type="text" id="name" required />
</div>

<div>
  <label for="phone">Phone*</label>
  <input name="phone" type="text" id="phone" />
</div>

<div>
  <label name="email">Email</label>
  <input name="email" type="text" id="email" required />
</div>

<div>
  <label for="comment">Comment</label>
  <input
    name="comment"
    type="text"
    id="comment"
    placeholder="Please tell me a little bit about your request."
  />
</div>

<button type="submit">Request More info</button>
</form>
`;
const form_submission_thankyou = `<div>Thanks for contacting me. I will get back to you asap!</div>`;
//# sourceMappingURL=server.js.map
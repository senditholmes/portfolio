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
    res.send(heroContent);
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
app.get("/contact", (req, res) => {
    res.send(contactForm);
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
const contactForm = `<form hx-post="/contact" hx-trigger="submit" hx-target="#display-content" hx-swap="beforeend">
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
</form>`;
const formSubmissionThankyou = `<div>Thanks for contacting me. I will get back to you asap!</div>`;
const heroContent = `
<h1 class="flex self-center">Daniel J Holmes</h1>
      <h2 class="flex self-center">Fullstack Developer | Software Engineer</h2>
      <div class="flex flex-col self-center">
        <h3>Frontend</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio in
          provident numquam facilis odio possimus excepturi nam illo illum
          asperiores vel est tempora quasi sunt perspiciatis eaque, nihil
          doloribus dolores.
        </p>

        <h3>Backend</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
          accusantium reiciendis, et dolor vel excepturi provident totam
          pariatur at tempore delectus! Debitis fugit libero aperiam? Optio ex
          et recusandae officia.
        </p>

        <h3>Speciality</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
          temporibus odio doloribus! Unde voluptatum, enim autem ipsum quos
          pariatur officia architecto molestiae? Corporis non ducimus tenetur
          itaque molestiae quaerat aliquam?
        </p>

        <h3>Teaching Professional</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus architecto commodi reiciendis accusamus ab consequuntur
          tempora eaque ut dolores vitae illo mollitia laudantium velit, tenetur
          veritatis reprehenderit! Voluptates, repellendus natus!
        </p>
      </div>`;
//# sourceMappingURL=server.js.map
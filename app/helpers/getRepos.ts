async function getRepos(): Promise<{}> {
  try {
    const repos = await octokit.request("GET /{org}/repos", {
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
      org: "senditholmes",
    });
    console.log(`${repos.data.length} repos found.`);
    res.send(`<div> Projects test</div>`);
    return repos;
  } catch (error) {
    console.log(error);
  }
}

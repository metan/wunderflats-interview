const fetch = require("node-fetch");

async function getRepoCreatedAt(owner, repo) {
  const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
  const data = await res.json();
  return new Date(data.created_at).toISOString().slice(0,10);
}

getRepoCreatedAt("facebook", "react").then(console.log);

module.exports = getRepoCreatedAt;

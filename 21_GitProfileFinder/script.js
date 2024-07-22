const inputField = document.querySelector("input");
const profileButton = document.querySelector("button");
const info = document.querySelector("div");
const BASE_URL = "https://api.github.com/users/";

profileButton.addEventListener("click", () => {
  const username = inputField.value.trim();
  if (username) {
    info.textContent = "Loading Data! Please Wait";
    getUserProfile(username);
  } else info.textContent = "Enter Username to get Profile Info";
});

async function getUserProfile(name) {
  const res = await fetch(`${BASE_URL}${name}`);
  const data = await res.json();
  console.log(data);
  data
    ? data.message === "Not Found"
      ? (info.textContent = "Profile Not Found")
      : displayGitProfile(data)
    : console.log("No Data");
}

function displayGitProfile(gitProfile) {
  const { login, avatar_url, public_repos, followers, following } = gitProfile;
  info.innerHTML = `
    <p>Username: ${login}</p>
    <img src=${avatar_url} alt=${login}>
    <p>Public Repositories: ${public_repos}</p>
    <p>Followers: ${followers}</p>
    <p>Following: ${following}</p>
    `;
}

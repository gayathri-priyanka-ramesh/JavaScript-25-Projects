const bottomButton = document.getElementById("bottom");
const topButton = document.getElementById("top");
const usersList = document.getElementById("users");

async function getUsers() {
  usersList.textContent = "Loading Users! Please Wait!";
  const response = await fetch("https://dummyjson.com/users?limit=100");
  const data = await response.json();
  const users = data.users;
  if (users) {
    usersList.textContent = "";
    users.forEach((user) => {
      console.log(user);
      const listItem = document.createElement("li");
      listItem.innerText = user.firstName + " " + user.lastName;
      usersList.appendChild(listItem);
    });
  }
}
getUsers();

bottomButton.addEventListener("click", () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
});

topButton.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

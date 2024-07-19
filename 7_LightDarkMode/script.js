const body = document.querySelector("body");
const mode = document.getElementById("mode");
const theme = document.querySelector("button");

mode.addEventListener("change", () => {
  const isChecked = mode.checked;
  console.log("Checked:", isChecked);
  //   if (isChecked) body.classList.add("dark");
  //   else body.classList.remove("dark");
  body.classList.toggle("dark");
});

theme.addEventListener("click", () => {
  //   body.classList.toggle("dark");
  //   body.classList.contains("dark")
  //     ? (theme.textContent = "Switch to Light")
  //     : (theme.textContent = "Switch to Dark");

  console.log("data-theme:", body.getAttribute("data-theme"));
  if (body.getAttribute("data-theme") === "dark") {
    theme.textContent = "Switch to Dark";
    body.setAttribute("data-theme", "");
  } else {
    theme.textContent = "Switch to Light";
    body.setAttribute("data-theme", "dark");
  }
});

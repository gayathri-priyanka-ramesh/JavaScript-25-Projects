const API_URL = `https://dummyjson.com/products?limit=10&skip=`;

const container = document.querySelector(".container");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  const step = container.childElementCount;
  console.log("Step:", step);
  if (step >= 40) {
    console.log("50 Products Displayed");
    button.setAttribute("disabled", true);
  }

  fetch(API_URL + step)
    .then((res) => res.json())
    .then((data) => displayData(data));
});

function displayData(apiData) {
  console.log("apiData:", apiData);
  apiData.products.forEach((data) => {
    console.log("data:", data);
    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    h3.textContent = data.title;
    const p = document.createElement("p");
    p.textContent = data.description;
    div.append(h3, p);
    container.appendChild(div);
  });
}

document.addEventListener("DOMContentLoaded", () => button.click());

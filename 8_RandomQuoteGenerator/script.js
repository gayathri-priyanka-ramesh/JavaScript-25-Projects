const button = document.querySelector("button");
const container = document.querySelector(".container");
const loader = document.querySelector("p");

container.style.border = "1px solid";
container.style.display = "none";

async function fetchQuote() {
  //   container.textContent = "Loading Quote";
  const response = await fetch("https://api.quotable.io/quotes/random");
  const data = await response.json();
  displayData(data);
}
fetchQuote();

function displayData(apiData) {
  console.log(apiData);
  const quote = apiData[0];
  if (quote) {
    loader.style.display = "none";
    container.style.display = "block";

    container.innerHTML = `
    <quote>${quote.content}</quote><br>
    <small> - ${quote.author}</small>
    `;
  }
}

button.addEventListener("click", () => fetchQuote());

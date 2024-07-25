const loader = document.querySelector(".loader");
const recipeList = document.querySelector(".recipeList");
const recipeDetails = document.querySelector(".recipeDetails");
const BASE_URL = "https://dummyjson.com/recipes";

async function fetchRecipeList() {
  showLoader();
  const response = await fetch(BASE_URL, {
    method: "GET",
  });
  const data = await response.json();
  if (data.recipes) {
    removeLoader();
    displayRecipeList(data.recipes);
  }
}
fetchRecipeList();

async function fetchCurrentRecipe(id) {
  const response = await fetch(`${BASE_URL}/${id}`);
  const data = await response.json();
  return displayCurrentRecipe(data);
}

function showLoader() {
  recipeList.style.display = "none";
  loader.style.display = "block";
}

function removeLoader() {
  recipeList.style.display = "grid";
  loader.style.display = "none";
}

function displayRecipeList(recipeArray) {
  recipeArray.forEach((recipe, index) => {
    const div = document.createElement("div");
    div.classList.add("recipeItem");
    const h3 = document.createElement("h3");
    h3.textContent = recipe.name;
    const img = document.createElement("img");
    img.src = recipe.image;
    div.append(h3, img);
    recipeList.append(div);

    div.addEventListener("click", async () => {
      recipeDetails.textContent = "";
      //   recipeDetails.innerHTML = await fetchCurrentRecipe(index + 1);
      recipeDetails.append(await fetchCurrentRecipe(index + 1));
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    });
  });
}

function displayCurrentRecipe(recipe) {
  const fragment = document.createDocumentFragment();
  const name = document.createElement("h3");
  name.textContent = recipe.name;
  const instructions = document.createElement("ul");
  recipe.instructions.forEach((instruction) => {
    const li = document.createElement("li");
    li.textContent = instruction;
    instructions.append(li);
  });
  fragment.append(name, instructions);
  return fragment;
}

// setTimeout(() => {
//   const recipeListArray = document.querySelectorAll(".recipeItem");
//   recipeListArray.forEach((recipeItem, index) => {
//     recipeItem.addEventListener("click", async () => {
//       recipeDetails.append(await fetchCurrentRecipe(index + 1));
//       window.scrollTo({
//         top: document.body.scrollHeight,
//         behavior: "smooth",
//       });
//     });
//   });
// }, 1000);

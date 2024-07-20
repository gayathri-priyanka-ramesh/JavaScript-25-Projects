const categoryArray = ["All", "Category1", "Category2", "Category3"];
const itemsArray = [
  { cat: "Category1", item: "Category 1 - Item 1" },
  { cat: "Category1", item: "Category 1 - Item 2" },
  { cat: "Category1", item: "Category 1 - Item 3" },
  { cat: "Category1", item: "Category 1 - Item 4" },
  { cat: "Category1", item: "Category 1 - Item 5" },
  { cat: "Category2", item: "Category 2 - Item 1" },
  { cat: "Category2", item: "Category 2 - Item 2" },
  { cat: "Category2", item: "Category 2 - Item 3" },
  { cat: "Category2", item: "Category 2 - Item 4" },
  { cat: "Category2", item: "Category 2 - Item 5" },
  { cat: "Category3", item: "Category 3 - Item 1" },
  { cat: "Category3", item: "Category 3 - Item 2" },
  { cat: "Category3", item: "Category 3 - Item 3" },
  { cat: "Category3", item: "Category 3 - Item 4" },
  { cat: "Category3", item: "Category 3 - Item 5" },
];

const buttonsContainer = document.getElementById("buttons");
const itemsContainer = document.getElementById("items");

categoryArray.forEach((cat) => {
  const button = document.createElement("button");
  button.textContent = cat;
  button.setAttribute("id", cat);
  buttonsContainer.append(button);
});

itemsArray.forEach((ele) => {
  const p = document.createElement("p");
  p.textContent = ele.item;
  p.setAttribute("id", ele.cat);
  itemsContainer.appendChild(p);
});

buttonsContainer.addEventListener("click", (event) => {
  const category = event.target.id;
  console.log("Category:", category);
  const items = itemsContainer.childNodes;
  items.forEach((item) => {
    item.style.display = "none";
    const id = item.getAttribute("id");
    if (
      id === category ||
      category === "All" ||
      !categoryArray.includes(category)
    )
      item.style.display = "block";
  });
});

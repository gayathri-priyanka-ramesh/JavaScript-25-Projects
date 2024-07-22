const itemsContainer = document.querySelector(".itemsContainer");
const buttonsContainer = document.querySelector(".buttonsContainer");
const previous = document.getElementById("previous");
const next = document.getElementById("next");

const itemsCount = 117;
const itemsPerPage = 12;
const buttonsCount = Math.ceil(itemsCount / itemsPerPage);
for (let i = 0; i < itemsCount; i++) {
  const item = document.createElement("li");
  item.textContent = `Item ${i + 1}`;
  item.setAttribute("item-id", i + 1);
  item.classList.add("item");
  itemsContainer.append(item);
}
for (let i = 1; i <= buttonsCount; i++) {
  const button = document.createElement("button");
  button.textContent = `Page ${i}`;
  button.id = i;
  button.classList.add("page");
  buttonsContainer.append(button);
}
const pagesArray = document.querySelectorAll(".page");
const itemsArray = document.querySelectorAll(".item");
let currentPage = 1;
getItems(currentPage);

previous.addEventListener("click", () => {
  currentPage--;
  getItems(currentPage);
});

next.addEventListener("click", () => {
  currentPage++;
  getItems(currentPage);
});

buttonsContainer.addEventListener("click", (e) => {
  const target = e.target;
  if (target.classList.contains("page")) getItems(target.id);
});

function getItems(page) {
  pagesArray.forEach((page) => (page.style.backgroundColor = ""));
  pagesArray[page - 1].style.backgroundColor = "yellow";

  //   const startItem = itemsPerPage * page - itemsPerPage + 1;
  const startItem = itemsPerPage * (page - 1) + 1;
  const endItem = itemsPerPage * page;
  console.log("Page:", page, "Start Item:", startItem, "End Item:", endItem);

  itemsArray.forEach((item) => (item.style.display = "none"));
  for (let i = startItem; i <= endItem; i++) {
    itemsArray[i - 1]
      ? (itemsArray[i - 1].style.display = "block")
      : console.log("No Item");
  }

  //   for (let i = 1; i <= itemsCount; i++) {
  //     itemsArray[i - 1].style.display = "none";
  //     if (i >= startItem && i <= endItem)
  //       itemsArray[i - 1].style.display = "block";
  //   }

  //   itemsArray.forEach((item) => {
  //     item.style.display = "none";
  //     const itemID = item.getAttribute("item-id");
  //     if (itemID >= startItem && itemID <= endItem) item.style.display = "block";
  //   });

  currentPage = page;
  currentPage <= 1 ? (previous.disabled = true) : (previous.disabled = false);
  currentPage >= buttonsCount
    ? (next.disabled = true)
    : (next.disabled = false);
}

const data = [
  {
    heading: "Heading 1",
    body: "1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quia exercitationem temporibus sapiente inventore fuga optio odit eos dolore explicabo.",
  },
  {
    heading: "Heading 2",
    body: "2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quia exercitationem temporibus sapiente inventore fuga optio odit eos dolore explicabo.",
  },
  {
    heading: "Heading 3",
    body: "3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quia exercitationem temporibus sapiente inventore fuga optio odit eos dolore explicabo.",
  },
  {
    heading: "Heading 4",
    body: "4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quia exercitationem temporibus sapiente inventore fuga optio odit eos dolore explicabo.",
  },
];

const div = document.querySelector(".container");

data.forEach((item) => {
  const itemContainer = document.createElement("div");
  itemContainer.classList.add("item");

  const heading = document.createElement("h3");
  heading.innerHTML = item.heading + '<i class="fa-solid fa-arrow-down"></i>';
  itemContainer.appendChild(heading);

  const body = document.createElement("p");
  body.textContent = item.body;
  itemContainer.appendChild(body);

  div.appendChild(itemContainer);
});

// 'map' returns an array
// div.innerHTML = data.map(
//   (item) => `
//     <h3>${item.heading} <i class="fa-solid fa-arrow-down"></i></h3>
//     <p>${item.body}</p>
//     `
// );
//   .join("-------------------------------------------------------------");

const headingArray = document.querySelectorAll("h3");
headingArray.forEach((headingItem) => {
  headingItem.addEventListener("click", () => {
    if (headingItem.classList.contains("active"))
      headingItem.classList.remove("active");
    else {
      //   headingArray.forEach((bodyItem) => bodyItem.classList.remove("active"));

      const currentActiveItems = document.querySelectorAll(".active");
      currentActiveItems.forEach((item) => item.classList.remove("active"));

      headingItem.classList.add("active");
    }
  });
});

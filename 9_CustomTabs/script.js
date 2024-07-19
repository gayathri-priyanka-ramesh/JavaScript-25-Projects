const titles = document.querySelector(".titles");
const titlesArr = document.getElementsByClassName("tab-title");
const buttons = document.querySelector(".buttons");
const buttonsArr = document.querySelectorAll(".tab-button");
const contents = document.querySelector(".contents");
// const contentsArr = document.getElementsByClassName("tab-content");
const contentsArr = document.querySelectorAll(".tab-content");

titles.addEventListener("click", (e) => {
  const target = e.target;
  if (target.classList.contains("tab-title")) {
    for (let i = 0; i < titlesArr.length; i++) {
      if (titlesArr[i] === target) {
        titlesArr[i].classList.add("active");
        contentsArr[i].classList.add("active");
      } else {
        titlesArr[i].classList.remove("active");
        contentsArr[i].classList.remove("active");
      }
    }
  }
});

buttons.addEventListener("click", (e) => {
  const target = e.target;
  if (target.classList.contains("tab-button")) {
    const id = target.dataset.id;
    buttonsArr.forEach((button) => button.classList.remove("active"));
    contentsArr.forEach((content) => content.classList.remove("active"));
    target.classList.add("active");
    document.getElementById(id).classList.add("active");
  }
});

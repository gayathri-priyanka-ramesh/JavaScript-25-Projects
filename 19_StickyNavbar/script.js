const nav = document.querySelector("ul");
let navTop = nav.offsetTop;

window.onscroll = function () {
  window.scrollY >= navTop
    ? nav.classList.add("make-sticky")
    : nav.classList.remove("make-sticky");
};

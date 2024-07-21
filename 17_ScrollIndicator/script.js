const scrollBackground = document.querySelector(".scrollBackground");
const scrollBar = document.querySelector(".scroll");

window.addEventListener("scroll", (e) => {
  console.log("Body");
  console.log(
    "scrollHeight:",
    document.body.scrollHeight,
    "clientHeight:",
    document.body.clientHeight
  );
  console.log("scrollTop:", document.body.scrollTop);
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
  console.log("Document Element");
  console.log(
    "scrollHeight:",
    document.documentElement.scrollHeight,
    "clientHeight:",
    document.documentElement.clientHeight
  );
  console.log("scrol;Top:", document.documentElement.scrollTop);
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  console.log("height:", height);
  let getScrollFromTop =
    document.body.scrollTop || document.documentElement.scrollTop;
  console.log("getScrollFromTop:", getScrollFromTop);
  const alreadyScrolledHeight = (getScrollFromTop / height) * 100;
  scrollBar.style.width = `${alreadyScrolledHeight}%`;
  console.log("alreadyScrolledHeight:", alreadyScrolledHeight);
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
});

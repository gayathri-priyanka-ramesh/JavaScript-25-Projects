const button = document.querySelector("button");

button.addEventListener("click", (e) => {
  console.log("ClientX:", e.clientX, "OffsetLeft:", e.target.offsetLeft);
  console.log("ClientY:", e.clientY, "OffsetTop:", e.target.offsetTop);
  let xCoordinate = e.clientX - e.target.offsetLeft;
  let yCoordinate = e.clientY - e.target.offsetTop;
  console.log("xCoordinate:", xCoordinate, "yCoordinate:", yCoordinate);

  const rippleElement = document.createElement("span");
  rippleElement.style.left = `${xCoordinate}px`;
  rippleElement.style.top = `${yCoordinate}px`;

  console.log("this:", this);
  button.appendChild(rippleElement);

  window.setTimeout(() => {
    rippleElement.remove();
  }, 5000);
});

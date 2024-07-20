const progress = document.querySelector(".progress");
const previous = document.getElementById("previous");
const next = document.getElementById("next");
const iconWrapper = document.querySelectorAll(".icon-wrapper");

let currentSelectedStep = 1;
next.addEventListener("click", () => {
  if (currentSelectedStep < iconWrapper.length) currentSelectedStep++;
  handleUpdateStep();
});
previous.addEventListener("click", () => {
  if (currentSelectedStep > 1) currentSelectedStep--;
  handleUpdateStep();
});

function handleUpdateStep() {
  iconWrapper.forEach((item, index) => {
    index < currentSelectedStep
      ? item.classList.add("active")
      : item.classList.remove("active");
    
    
  });

  progress.style.width =
    ((currentSelectedStep - 1) / (iconWrapper.length - 1)) * 100 + "%";

  if (currentSelectedStep === 1) previous.disabled = true;
  else if (currentSelectedStep === iconWrapper.length) next.disabled = true;
  else {
    previous.disabled = false;
    next.disabled = false;
  }
}

const starRated = document.getElementById("value");
const starArray = document.getElementsByTagName("i");
console.log(starArray);
for (let i = 0; i < starArray.length; i++) {
  //   starArray[i].addEventListener("click", () => {
  //     for (let j = 0; j <= num; j++) starArray[j].classList.add("active");
  //     for (let k = num + 1; k < 5; k++) starArray[k].classList.remove("active");
  //     starRated.textContent = i + 1;
  //   });

  starArray[i].addEventListener("mouseover", () => {
    starUpdate(i);
    starArray[i].addEventListener(
      "click",
      () => (starRated.textContent = i + 1)
    );
  });

  starArray[i].addEventListener("mouseout", () => {
    starUpdate(starRated.textContent - 1);
  });
}

function starUpdate(num) {
  for (let j = 0; j <= num; j++) starArray[j].classList.add("active");
  for (let k = num + 1; k < 5; k++) starArray[k].classList.remove("active");
}

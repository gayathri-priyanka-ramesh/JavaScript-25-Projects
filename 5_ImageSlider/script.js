const imageContainer = document.querySelector(".imageContainer");
const dotContainer = document.querySelector(".dotContainer");

fetch("https://jsonplaceholder.typicode.com/photos")
  .then((res) => res.json())
  .then((data) => loadImage(data));
const limit = 10;

function loadImage(apiData) {
  for (let i = 0; i < limit; i++) {
    const slide = document.createElement("div");
    slide.classList.add("slide");
    const image = document.createElement("img");
    image.src = apiData[i].thumbnailUrl;
    slide.appendChild(image);
    imageContainer.appendChild(slide);

    const dot = document.createElement("span");
    dot.classList.add("dot");
    dot.dataset.slide = i;
    dotContainer.appendChild(dot);
  }
}

// Wait for Images to be loaded
setTimeout(() => {
  const slideArr = document.querySelectorAll(".slide");
  const dotArr = document.querySelectorAll(".dot");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

  function getCurrentSlide(slide) {
    if (slide < 0) slide = limit - 1;
    if (slide >= limit) slide = 0;
    return slide;
  }
  function getCurrentImage(slideIndex) {
    slideArr.forEach((slide, index) => {
      let slideDistance = index - slideIndex;
      // console.log(
      //   "Index:",
      //   index,
      //   "SlideIndex:",
      //   slideIndex,
      //   "SlideDistance:",
      //   slideDistance
      // );
      slide.style.transform = `translateX(${100 * slideDistance}%)`;
    });
  }
  function getActiveDot(slideIndex) {
    dotArr.forEach((dot) => dot.classList.remove("active"));
    dotArr[slideIndex].classList.add("active");
    console.log("Dot Array:", dotArr);
  }

  let currentSlide = 0;
  getCurrentImage(currentSlide);
  getActiveDot(currentSlide);

  prevBtn.addEventListener("click", () => {
    currentSlide--;
    currentSlide = getCurrentSlide(currentSlide);
    console.log("currentSlide:", currentSlide);
    getCurrentImage(currentSlide);
    getActiveDot(currentSlide);
  });

  nextBtn.addEventListener("click", () => {
    currentSlide++;
    currentSlide = getCurrentSlide(currentSlide);
    console.log("currentSlide:", currentSlide);
    getCurrentImage(currentSlide);
    getActiveDot(currentSlide);
  });

  // dotArr.forEach((dot) => {
  //   dot.addEventListener("click", (e) => {
  //     const currentSlide = getCurrentSlide(e.target.dataset.slide);
  //     console.log(currentSlide);
  //     getCurrentImage(currentSlide);
  //     getActiveDot(currentSlide);
  //   });
  // });

  // Event Delegation
  dotContainer.addEventListener("click", (event) => {
    console.log("Event Target:", event.target);
    const targetDot = event.target;
    if (targetDot.classList.contains("dot")) {
      currentSlide = getCurrentSlide(targetDot.dataset.slide);
      console.log("currentSlide:", currentSlide);
      getCurrentImage(currentSlide);
      getActiveDot(currentSlide);
    }
  });

  // Automatic SlideShow
  setInterval(() => {
    currentSlide++;
    currentSlide = getCurrentSlide(currentSlide);
    console.log("Current Slide -> ", currentSlide);
    getCurrentImage(currentSlide);
    getActiveDot(currentSlide);
  }, 2000);
}, 1000);

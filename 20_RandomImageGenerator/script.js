const imageContainer = document.querySelector(".imageContainer");
const generate = document.querySelector("button");

let id = 1;
generate.addEventListener("click", () => {
  const imagesWrapper = document.createElement("div");
  imagesWrapper.style.display = "flex";
  for (let i = id; i <= id + 4; i++) {
    fetch(`https://picsum.photos/300?random=${i}`).then((res) =>
      //   displayImg(res.url, imagesWrapper)
      {
        const image = document.createElement("img");
        image.src = res.url;
        image.style.width = "100px";
        imagesWrapper.append(image);
      }
    );
  }
  id += 5;
  imageContainer.append(imagesWrapper);
});

function displayImg(url, wrapper) {
  //   const image = `<img src="${url}" alt="">`;
  const image = document.createElement("img");
  image.src = url;
  image.style.width = "100px";
  wrapper.append(image);
}

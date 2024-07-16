const hexContainer = document.querySelector(".hexContainer");
const hexCode = document.querySelector(".hexCode");
const hexButton = document.querySelector(".hexButton");
const hexCopy = document.querySelector(".hexCopy");
let hexColor = hexCode.textContent;
const hexValues = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
const hexCharacters = "0123456789ABCDEF";
hexButton.addEventListener("click", () => {
  hexColor = "#";

  //   const hexArr = [
  //     Math.floor(Math.random() * 16),
  //     Math.floor(Math.random() * 16),
  //     Math.floor(Math.random() * 16),
  //     Math.floor(Math.random() * 16),
  //     Math.floor(Math.random() * 16),
  //     Math.floor(Math.random() * 16),
  //   ];
  //   hexColor += `${hexValues[hexArr[0]]}${hexValues[hexArr[1]]}${
  //     hexValues[hexArr[2]]
  //   }${hexValues[hexArr[3]]}${hexValues[hexArr[4]]}${hexValues[hexArr[5]]}`;

  //   const hexArr = [];
  //   for (let i = 0; i < 6; i++)
  //     hexArr[i] = hexValues[Math.round(Math.random() * 16)];
  //   hexColor += hexArr.join("");

  for (let i = 0, len = hexCharacters.length; i < 6; i++)
    hexColor += hexCharacters.charAt(Math.floor(Math.random() * len));

  hexCode.textContent = hexColor;
  hexContainer.style.backgroundColor = hexColor;
  console.log(hexColor);
});
hexCopy.addEventListener("click", () => {
  navigator.clipboard.writeText(hexColor);
  alert(`HEX Copy: ${hexColor}`);
});

const rgbContainer = document.querySelector(".rgbContainer");
const rgbCode = document.querySelector(".rgbCode");
const rgbButton = document.querySelector(".rgbButton");
const rgbCopy = document.querySelector(".rgbCopy");
let rgbColor = rgbCode.textContent;
rgbButton.addEventListener("click", () => {
  const redValue = document.getElementById("red").value;
  const greenValue = document.getElementById("green").value;
  const blueValue = document.getElementById("blue").value;
  rgbColor = `rgb(${redValue},${greenValue},${blueValue})`;
  rgbCode.textContent = rgbColor;
  rgbContainer.style.backgroundColor = rgbColor;
  console.log(rgbColor);
});
rgbCopy.addEventListener("click", () => {
  navigator.clipboard.writeText(rgbColor);
  alert(`RGB Copy: ${rgbColor}`);
});

document.addEventListener("DOMContentLoaded", () => {
  rgbButton.click();
  hexButton.click();
});

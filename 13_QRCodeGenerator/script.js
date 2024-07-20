const textField = document.querySelector("input");
const qrCodeContainer = document.getElementById("qr-code");
const generate = document.querySelector("button");

generate.addEventListener("click", () => {
  const text = textField.value.trim();
  if (!text) {
    qrCodeContainer.innerText = "Enter textor URL to generate QR Code";
    textField.value = "";
  } else {
    new QRCode(qrCodeContainer, {
      text: text,
      height: 300,
      width: 300,
      colorLight: "black",
      colorDark: "yellow",
    });
  }
});

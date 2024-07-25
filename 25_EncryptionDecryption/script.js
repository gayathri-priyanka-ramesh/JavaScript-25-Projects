const dataField = document.getElementById("data");
const keyField = document.getElementById("key");
const buttonsContainer = document.querySelector("div");
const result = document.querySelector("p");
const copyButton = document.getElementById("copy");
const resetButton = document.getElementById("reset");

result.style.display = "none";
copyButton.style.display = "none";

buttonsContainer.addEventListener("click", (e) => {
  const target = e.target;
  const data = dataField.value.trim();
  const _key = keyField.value.trim();
  if (_key) {
    console.log(target);
    let resValue;
    if (target.id === "encrypt") {
      console.log("Encryption");
      const cipher = CryptoJS.AES.encrypt(data, _key);
      console.log("Cipher:", cipher);
      resValue = cipher.toString();
      console.log("Result:", resValue);
    }
    if (target.id === "decrypt") {
      console.log("Decryption");
      const decipher = CryptoJS.AES.decrypt(data, _key);
      console.log("Decipher:", decipher);
      console.log(decipher.toString());
      resValue = decipher.toString(CryptoJS.enc.Utf8);
      console.log("Result:", resValue);
    }

    result.textContent = resValue;
    result.style.display = "block";
    copyButton.style.display = "block";
    copyButton.addEventListener("click", () => {
      window.navigator.clipboard.writeText(resValue);
    });
  }
});

resetButton.addEventListener("click", () => {
  result.style.display = "none";
  copyButton.style.display = "none";
  dataField.value = "";
  keyField.value = "";
});

// var crypt = {
//   secret: "CIPHERKEY",
//   encrypt: (originalData) => {
//     var cipher = CryptoJS.AES.encrypt(originalData, crypt.secret);
//     return cipher.toString();
//   },
//   decrypt: (cipher) => {
//     var decipher = CryptoJS.AES.decrypt(cipher, crypt.secret);
//     return decipher.toString(CryptoJS.enc.Utf8);
//   },
// };
// var cipher = crypt.encrypt("Original Text");
// console.log(cipher);
// var decipher = crypt.decrypt(cipher);
// console.log(decipher);

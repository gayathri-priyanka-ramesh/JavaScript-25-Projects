const openBtn = document.getElementById("open");
const modalBackground = document.querySelector(".modal-background");
const modal = document.querySelector(".modal");
const modalChildren = modal.childNodes;
const submit = modal.querySelector(".submit");

openBtn.addEventListener("click", () => {
  modalBackground.style.display = "flex";
});

modalBackground.addEventListener("click", (e) => {
  const target = e.target;
  console.log(target);
  if (target.classList.contains("close") || target === modalBackground) {
    closeModal();
  }
});

function closeModal() {
  modalBackground.style.display = "none";
}

submit.addEventListener("click", () => {
  const textData = modal.querySelector("input");
  const formValue = document.querySelector("p");
  formValue.innerText = textData.value;
});

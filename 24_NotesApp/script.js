const inputField = document.querySelector("input");
const addButton = document.querySelector("#add");
const errorMsg = document.querySelector("p");
const notes = document.querySelector(".notes");
let currentID = 0;
let isEdit = null;

window.addEventListener("DOMContentLoaded", () => {
  notesAppSimple();
  // notesAppArray();
  // notesAppLocalStorage();
});

function notesAppSimple() {
  addButtonClick();
}

function notesAppArray() {}

function notesAppLocalStorage() {}

function addButtonClick() {
  addButton.addEventListener("click", () => {
    const noteData = inputField.value.trim();
    if (noteData) {
      if (isEdit) {
        console.log(isEdit);
        const notesArr = document.querySelectorAll(".noteText");
        notesArr[isEdit].textContent = noteData;
        isEdit = null;
      } else {
        const newNoteItem = createNewNote(noteData);
        notes.appendChild(newNoteItem);

        // const currentID = notes.childElementCount + 1;
        currentID++;
      }
      inputField.value = "";
    } else errorMsg.textContent = "Enter Data to add Note";
  });
}

function createNewNote(noteValue) {
  const noteWrapper = document.createElement("div");
  noteWrapper.classList.add("noteWrapper");

  const noteText = document.createElement("h3");
  noteText.classList.add("noteText");
  noteText.dataset.id = currentID;
  noteText.textContent = noteValue;

  const editButton = document.createElement("button");
  editButton.classList.add("edit");
  editButton.dataset.id = currentID;
  editButton.textContent = "Edit";

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete");
  deleteButton.dataset.id = currentID;
  deleteButton.textContent = "Delete";

  noteWrapper.append(noteText, editButton, deleteButton);
  console.log(noteWrapper);
  return noteWrapper;
}

notes.addEventListener("click", (e) => {
  const target = e.target;

  if (target.classList.contains("edit")) {
    const notesArr = document.querySelectorAll(".noteText");
    console.log(notesArr);
    inputField.value = notesArr[target.dataset.id].textContent;
    isEdit = target.dataset.id;
  }

  if (target.classList.contains("delete")) {
    const notesWraperArr = document.querySelectorAll(".noteWrapper");
    console.log(notesWraperArr);
    notesWraperArr.remove(notesWraperArr[target.dataset.id]);
    console.log(notesWraperArr);
  }
});

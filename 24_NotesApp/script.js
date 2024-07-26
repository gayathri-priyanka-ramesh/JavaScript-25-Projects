const inputField = document.querySelector("input");
const addButton = document.querySelector("#add");
const errorMsg = document.querySelector("p");
const notesContainer = document.querySelector(".notesContainer");

notesContainer.style.border = "1px solid";
let currentEditEvent = null;

document.addEventListener("DOMContentLoaded", () => {
  const notesList = getNotesList();
  notesList.forEach((noteData) => {
    const newNoteItem = createNewNote(noteData);
    notesContainer.appendChild(newNoteItem);
  });
});

addButton.addEventListener("click", () => {
  const noteData = inputField.value.trim();
  if (noteData) {
    if (currentEditEvent) {
      const notesList = getNotesList();
      const currentNoteItem = currentEditEvent.target.previousElementSibling;
      const currentIndex = notesList.indexOf(currentNoteItem.textContent);
      currentNoteItem.textContent = noteData;
      notesList.splice(currentIndex, 1, noteData);
      localStorage.setItem("notes", JSON.stringify(notesList));
      addButton.innerText = "Add Note";
      currentEditEvent = null;
    } else {
      const newNoteItem = createNewNote(noteData);
      notesContainer.appendChild(newNoteItem);
      saveToStorage(noteData);
    }
    inputField.value = "";
  } else errorMsg.textContent = "Enter Data to add Note";
});

notesContainer.addEventListener("click", (e) => {
  const target = e.target;
  const targetParent = target.parentElement;
  const noteText = targetParent.children[0].innerText;
  console.log(
    "Target:",
    target,
    "\nParent of Target:",
    targetParent,
    "\nNote Text:",
    noteText
  );
  if (target.innerText === "Edit") {
    inputField.value = noteText;
    inputField.focus();
    addButton.innerText = "Update Note";
    currentEditEvent = e;
    console.log("currentEditEvent:", currentEditEvent);
  }
  if (target.innerText === "Delete") {
    targetParent.remove();
    const notesList = getNotesList();
    const currentIndex = notesList.indexOf(noteText);
    notesList.splice(currentIndex, 1);
    localStorage.setItem("notes", JSON.stringify(notesList));
  }
});

function getNotesList() {
  let notesList;
  const notesListInStorage = localStorage.getItem("notes");
  if (notesListInStorage === null) notesList = [];
  else notesList = JSON.parse(notesListInStorage);
  return notesList;
}

function saveToStorage(noteValue) {
  const notesList = getNotesList();
  notesList.push(noteValue);
  localStorage.setItem("notes", JSON.stringify(notesList));
}

function createNewNote(noteValue) {
  const noteWrapper = document.createElement("div");
  noteWrapper.style.cssText =
    "border:2px solid orange; margin:20px; padding:10px";

  const noteText = document.createElement("h3");
  noteText.textContent = noteValue;

  const editButton = document.createElement("button");
  editButton.textContent = "Edit";

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";

  noteWrapper.append(noteText, editButton, deleteButton);
  console.log(noteWrapper);
  return noteWrapper;
}

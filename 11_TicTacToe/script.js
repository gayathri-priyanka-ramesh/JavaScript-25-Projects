const colArr = document.querySelectorAll(".col");
const msg = document.querySelector("p");
const restart = document.querySelector("button");

// 0 1 2
// 3 4 5
// 6 7 8
const ticTacToe = [];
const winningPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let turn = true;
msg.textContent = "X's Turn";

window.addEventListener("DOMContentLoaded", () => restart.click());
restart.addEventListener("click", () => {
  colArr.forEach((ele) => (ele.textContent = ""));
  msg.textContent = "X's Turn";
  turn = true;
  colArr.forEach((ele) => {
    ele.addEventListener("click", game);
  });
});

function game(event) {
  const element = event.target;
  if (element.textContent !== "") {
    element.style.cursor = "not-allowed";
    return false;
  }

  turn = getTurn(turn, element);
  console.log("Turn:", turn);

  for (let i = 0; i < 9; i++) {
    ticTacToe[i] = colArr[i].textContent;
  }
  console.log(ticTacToe);

  if (checkStatus(ticTacToe, turn)) {
    colArr.forEach((ele) => {
      ele.removeEventListener("click", game);
      ele.style.cursor = "not-allowed";
    });
    return;
  }

  if (checkTie(ticTacToe)) {
    msg.textContent = "Game Tie! Restart Game!";
  }
}

function getTurn(turn, tile) {
  if (turn) {
    tile.textContent = "X";
    msg.textContent = "O's Turn";
    return false;
  } else {
    tile.textContent = "O";
    msg.textContent = "X's Turn";
    return true;
  }
}

function checkStatus(arr, turn) {
  const currentPlayer = turn ? "O" : "X";
  console.log("Current Player:", currentPlayer);
  let isWin = false;
  winningPattern.forEach((pattern) => {
    const [a, b, c] = pattern;
    if (
      arr[a] === currentPlayer &&
      arr[b] === currentPlayer &&
      arr[c] === currentPlayer
    ) {
      console.log(currentPlayer, "Win Detected:", [a, b, c]);
      msg.textContent = `${currentPlayer} Wins! Restart Game`;
      isWin = true;
    }
  });
  return isWin;
}

function checkTie(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "") {
      return false;
    }
  }
  console.log("Game Tie");
  return true;
}

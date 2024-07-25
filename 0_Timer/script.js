const timer = document.querySelector("h1");
const reset = document.querySelector("#reset");
const pause = document.querySelector("#pause");

let totalSeconds;
let interval;
let paused = false;
// let currentSeconds;

window.addEventListener("DOMContentLoaded", () => reset.click());

reset.addEventListener("click", () => {
  clearInterval(interval);
  startNewTimer(117);
});

function startNewTimer(seconds) {
  interval = setInterval(() => {
    timer.textContent = `${String(Math.floor(seconds / 60)).padStart(
      2,
      "0"
    )}:${String(seconds % 60).padStart(2, "0")}`;
    seconds--;
    if (seconds === 0) timer.textContent = "00:00";
    // currentSeconds = seconds;
  }, 1000);
}

pause.addEventListener("click", () => {
  paused = !paused;
  console.log("Paused:", paused);
  pause.textContent === "Pause"
    ? (pause.textContent = "Resume")
    : (pause.textContent = "Pause");
  if (paused) {
    // const currentTime = timer.textContent.split(":");
    // console.log("Paused at", currentTime);
    // const minutes = currentTime[0];
    // const seconds = currentTime[1];

    const [minutes, seconds] = timer.textContent.split(":");
    totalSeconds = minutes * 60 + +seconds;

    console.log(
      "Paused at Minutes:",
      minutes,
      "Seconds:",
      seconds,
      "TotalSeconds:",
      totalSeconds
    );

    // console.log("Paused at", currentSeconds);
    clearInterval(interval);
  } else {
    console.log("Resumed with", totalSeconds);
    startNewTimer(totalSeconds);

    // console.log("Resumed with", currentSeconds);
    // startNewTimer(currentSeconds);
  }
});

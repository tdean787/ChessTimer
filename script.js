//TODO: add logic to check that timer is at 0 and game is over
//TODOD: implement time controls with increment

const whiteTimerOutput = document.querySelector("#white-timer-output");
const blackTimerOutput = document.querySelector("#black-timer-output");
const blackBlock = document.querySelector(".black-block");
const whiteBlock = document.querySelector(".white-block");
const playIcon = document.querySelector(".fa-play");
const pauseIcon = document.querySelector(".fa-pause");
const redoIcon = document.querySelector(".fa-redo");

let turn = undefined;

whiteTimerOutput.innerHTML = `${localStorage.getItem("timeControl")}:00`;
blackTimerOutput.innerHTML = `${localStorage.getItem("timeControl")}:00`;

//turn these into one factory function
const whiteTimer = {
  defaultTime: localStorage.getItem("timeControl") * 60,
  timer: undefined,
  formattedTime: function () {
    var minutes = Math.floor(this.defaultTime / 60);
    var seconds = this.defaultTime % 60;
    // console.log(`${minutes}:${("0" + seconds).slice(-2)}`);
    whiteTimerOutput.innerHTML = `${minutes}:${("0" + seconds).slice(-2)}`;
  },
  tick: function () {
    if (whiteTimer.defaultTime == 0) {
      clearInterval(whiteTimer.timer);
      alert("black wins on time");
    } else {
      whiteTimer.defaultTime -= 1;
    }
    whiteTimer.formattedTime();
  },

  pause: function () {
    clearTimeout(whiteTimer.timer);
  },
};

const blackTimer = {
  defaultTime: localStorage.getItem("timeControl") * 60,
  timer: undefined,
  formattedTime: function () {
    var minutes = Math.floor(this.defaultTime / 60);
    var seconds = this.defaultTime % 60;
    // console.log(`${minutes}:${("0" + seconds).slice(-2)}`);
    blackTimerOutput.innerHTML = `${minutes}:${("0" + seconds).slice(-2)}`;
  },
  tick: function () {
    if (blackTimer.defaultTime == 0) {
      clearInterval(blackTimer.timer);
      alert("white wins on time");
    } else {
      blackTimer.defaultTime -= 1;
    }
    blackTimer.formattedTime();
  },

  //   play: function () {
  //     blackTimer.timer = setInterval(this.tick, 1000);
  //   },

  pause: function () {
    clearTimeout(blackTimer.timer);
  },
};

function pauseTimers() {
  clearTimeout(blackTimer.timer);
  clearTimeout(whiteTimer.timer);
}

function redoTimers() {
  clearTimeout(blackTimer.timer);
  clearTimeout(whiteTimer.timer);
  blackTimer.defaultTime = localStorage.getItem("timeControl") * 60;
  whiteTimer.defaultTime = localStorage.getItem("timeControl") * 60;
  whiteTimerOutput.innerHTML = `${localStorage.getItem("timeControl")}:00`;
  blackTimerOutput.innerHTML = `${localStorage.getItem("timeControl")}:00`;
  turn = "white";
}

function play() {
  if (turn == "black") {
    whiteTimer.timer = setInterval(whiteTimer.tick, 1000);
    turn = "white";
    blackTimer.pause();
    console.log(turn);
  } else {
    blackTimer.timer = setInterval(blackTimer.tick, 1000);
    turn = "black";
    whiteTimer.pause();
    console.log(turn);
  }
}
//the below should check for a game ended on time
// if (whiteTimer.defaultTime == 0) {
//   alert("Black wins on time");
// } else if (blackTimer.defaultTime == 0) {
//   alert("White wins on time");
// } else blackBlock.addEventListener("click", play);

whiteBlock.addEventListener("click", play);
pauseIcon.addEventListener("click", pauseTimers);
redoIcon.addEventListener("click", redoTimers);

//TODO: add logic to check that timer is at 0 and game is over
//TODOD: implement time controls with increment

const whiteTimerOutput = document.querySelector("#white-timer-output");
const blackTimerOutput = document.querySelector("#black-timer-output");
// const whiteButton = document.querySelector("#white-button");
// const blackButton = document.querySelector("#black-button");
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
    whiteTimer.defaultTime -= 1;
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
    blackTimer.defaultTime -= 1;
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

// function blackPlay() {
//   if (turn == "white") {
//     return;
//   } else {

//   }
// }

blackBlock.addEventListener("click", play);
whiteBlock.addEventListener("click", play);
pauseIcon.addEventListener("click", pauseTimers);
redoIcon.addEventListener("click", redoTimers);
// whiteButton.addEventListener("click", whitePlay);
// blackButton.addEventListener("click", blackPlay);
// const Timer = (playerName, color) => {
//   const defaultTime = 10 * 60;
//   const timer = undefined;

//   const tick = function () {
//     // defaultTime = defaultTime - 1;
//     console.log(defaultTime);
//     formattedTime();
//   };

//   const play = function () {
//     this.timer = setInterval(this.tick, 1000);
//   };

//   const pause = function () {
//     clearTimeout(this.timer);
//   };

//   this.playerName = playerName;
//   this.color = color;
//   return { timer, playerName, color, formattedTime, play, tick, pause };
// };

// const Taylor = Timer("Taylor", "white");
// const Ciara = Timer("Ciara", "black");

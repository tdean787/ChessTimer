//TODO: add logic to check that timer is at 0 and game is over
//TODOD: implement time controls with increment

const whiteTimerOutput = document.querySelector("#white-timer-output");
const blackTimerOutput = document.querySelector("#black-timer-output");
// const whiteButton = document.querySelector("#white-button");
// const blackButton = document.querySelector("#black-button");
const blackBlock = document.querySelector(".black-block");
const whiteBlock = document.querySelector(".white-block");

let turn = undefined;

// console.log(localStorage.getItem("timeControl"));

whiteTimerOutput.innerHTML = `${localStorage.getItem("timeControl")}:00`;
blackTimerOutput.innerHTML = `${localStorage.getItem("timeControl")}:00`;

const whiteTimer = {
  defaultTime: localStorage.getItem("timeControl") * 60,
  timer: undefined,
  formattedTime: function () {
    var minutes = Math.floor(this.defaultTime / 60);
    var seconds = this.defaultTime % 60;
    console.log(`${minutes}:${("0" + seconds).slice(-2)}`);
    whiteTimerOutput.innerHTML = `${minutes}:${("0" + seconds).slice(-2)}`;
  },
  tick: function () {
    whiteTimer.defaultTime -= 1;
    whiteTimer.formattedTime();
  },

  //   play: function () {
  //     whiteTimer.timer = setInterval(this.tick, 1000);
  //   },

  pause: function () {
    clearTimeout(whiteTimer.timer);
  },
};

function whitePlay() {
  if (turn == "black") {
    return;
  } else {
    blackTimer.timer = setInterval(blackTimer.tick, 1000);
    turn = "black";
    whiteTimer.pause();
    console.log(turn);
  }
}

function blackPlay() {
  if (turn == "white") {
    return;
  } else {
    whiteTimer.timer = setInterval(whiteTimer.tick, 1000);
    turn = "white";
    blackTimer.pause();
    console.log(turn);
  }
}

const blackTimer = {
  defaultTime: localStorage.getItem("timeControl") * 60,
  timer: undefined,
  formattedTime: function () {
    var minutes = Math.floor(this.defaultTime / 60);
    var seconds = this.defaultTime % 60;
    console.log(`${minutes}:${("0" + seconds).slice(-2)}`);
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
blackBlock.addEventListener("click", blackPlay);
whiteBlock.addEventListener("click", whitePlay);

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

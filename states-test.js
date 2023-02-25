// game-states
// the following 42 lines was adapted from lecture 10
createCanvas(675, 724);

function startGame() {
  background(0, 0, 0);
  fill(255, 255, 255);
  text("Welcome to the Luma Lander game!", 110, 240);
  textSize(30);
  fill(255, 255, 0);
  text("Click on the screen to start", 180, 400);
}

function playGame() {
  background(255, 0, 0);
  text("game is being played", 336, 263);
}
function lostGame() {
  background(0, 255, 0);
  text("you lost! click on the screen to try again", 336, 263);
}

function wonGame() {
  background(0, 0, 0);
  text("you won! click on the screen to play again", 336, 263);
}

let state = "start";

function draw() {
  if (state === "start") {
    startGame();
  } else if (state === "play") {
    playGame();
  } else if (state === "lost") {
    lostGame();
  } else if (state === "won") {
    wonGame();
  }
}

function mouseClicked() {
  if (state === "start") {
    state = "play";
  } else if (state === "lost" || "won") {
    state = "play";
  }
}

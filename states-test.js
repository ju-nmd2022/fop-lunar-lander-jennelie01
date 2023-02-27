createCanvas(591, 724);

// luma star
function lumaStar(x, y, rotation) {
  push();
  translate(x, y);
  rotate(rotation);
  translate(-252, -220);

  if (keyIsDown(40)) {
    // rainbow
    noStroke();
    fill(255, 0, 0);
    rect(211.74, 275.92, 12, 60);
    fill(255, 200, 0);
    rect(223.11, 275.92, 12, 60);
    fill(255, 255, 0);
    rect(235.11, 275.92, 12, 60);
    fill(0, 255, 0);
    rect(246, 275.92, 12, 60);
    fill(0, 0, 255);
    rect(258.11, 275.92, 12, 60);
    fill(102, 45, 145);
    rect(270.11, 275.92, 12, 60);
    fill(146, 39, 142);
    rect(282.11, 275.92, 12, 60);
  }

  // star shape
  stroke(0);
  strokeWeight(1);
  fill(255, 255, 0);
  beginShape();
  vertex(251.89, 148.9);
  vertex(278.71, 192.77);
  vertex(328.72, 204.71);
  vertex(295.28, 243.77);
  vertex(299.37, 295.02);
  vertex(251.89, 275.29);
  vertex(204.41, 295.02);
  vertex(208.51, 243.77);
  vertex(175.07, 204.71);
  vertex(225.08, 192.77);
  vertex(251.89, 148.9);
  endShape();

  // eyes
  fill(0, 0, 0);
  ellipse(235.64, 223.94, 15, 45);
  ellipse(270.3, 223.94, 15, 45);

  // reflection in eyes
  fill(255, 255, 255);
  ellipse(233.33, 211.42, 5, 10);
  ellipse(268.06, 211.42, 5, 10);

  pop();
}

// scenery
function scenery() {
  background(0, 0, 0);
  noStroke();
  fill(107, 107, 107);
  rect(0, 618, width);
  fill(65, 65, 65);
  ellipse(60, 694, 40, 30);
  ellipse(406, 704, 40, 30);
  ellipse(526, 700, 40, 30);
  ellipse(89, 660, 40, 30);
  ellipse(233, 701, 40, 30);
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

// adapted from flappy bird example
let xPosition = 300;
let yPosition = 100;
let velocity = 1;
let acceleration = 0.2;
let xRotate = 200;
let yRotate = 200;
let rotation = 0;
let speed = 0;

// states
// the following 42 lines has been adapted from lecture 10
function startGame() {
  background(0, 0, 0);
  fill(255, 255, 255);
  text("Welcome to the Luma Lander game!", 70, 240);
  textSize(30);
  fill(255, 255, 0);
  text("Click on the screen to start", 140, 400);
}

function playGame() {
  scenery();
  lumaStar(xPosition, yPosition, rotation);
  state = "play";

  // moving luma up
  if (keyIsDown(40)) {
    velocity = velocity - 0.5;
  } else {
    speed = 0;
  }

  // moving luma left and right
  if (keyIsDown(39)) {
    xPosition = xPosition + 1;
  } else if (keyIsDown(37)) {
    xPosition = xPosition - 1;
  }

  // gravity
  yPosition = yPosition + velocity;
  velocity = velocity + acceleration;

  // the following 15 lines of code has been adapted from Linus Isaksson
  //console.log(yPosition);
  //console.log(velocity);
  if (yPosition >= 600 && velocity >= 5) {
    state = "lost";
    yPosition = 100;
    xPosition = 300;
    velocity = 1;
    acceleration = 0.2;
    speed = 0;
    lostGame();
  } else if (yPosition >= 600 && velocity < 5) {
    state = "won";
    yPosition = 100;
    xPosition = 300;
    velocity = 1;
    acceleration = 0.2;
    speed = 0;
    wonGame();
  }
}

function lostGame() {
  fill(255, 255, 0);
  text("You lost!", 235, 240);
  fill(255, 255, 255);
  text("Click on the screen to try again", 90, 350);
}

function wonGame() {
  fill(255, 255, 0);
  text("You won!", 235, 240);
  fill(255, 255, 255);
  text("click on the screen to play again", 90, 350);
}

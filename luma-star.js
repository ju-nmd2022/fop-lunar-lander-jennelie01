function lumaStar(x, y) {
  push();
  translate(x, y);

  // star shape
  strokeWeight(0.5);
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
}

function draw() {
  lumaStar(50, 50);
}

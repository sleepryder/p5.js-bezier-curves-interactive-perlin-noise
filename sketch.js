let t;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER);
  background(255);
  noFill();
  t = 0;
}

function draw() {
  background(0, 5);
  translate(width / 2, height / 2);

  for (let j = 0; j < 4; j++) {
    let offset = j * 60;
    let distToMouse = dist(mouseX, mouseY, width / 2, height / 2);
    let influence = map(distToMouse, 0, width / 2, 1.5, 1);
    stroke(
      lerpColor(
        color(255, 234, 0),
        color(255, 0, 179),
        noise(t * 0.04 + j * 0.4)
      )
    );
    beginShape();
    for (let i = 0; i < 200; i++) {
      let ang = map(i, 0, 200, 0, TWO_PI);
      let noiseFactor = noise(i * 0.02 + t * 0.005 + j * 0.1, t * 0.01);
      let rad = (100 + offset + 200 * noiseFactor) * influence;
      let x = rad * cos(ang);
      let y = rad * sin(ang);
      curveVertex(x, y);
    }
    endShape(CLOSE);
  }

  t += 1;
}

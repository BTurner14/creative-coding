let r = 255;
let g = 255;
let b = 255;

function setup() {
  createCanvas(640, 480);
  stroke(0)
}

function draw() {
  if (mouseIsPressed) {
    r = random(255);
    g = random(255);
    b = random(255);
  }
  fill(r, g, b);
  ellipse(mouseX, mouseY, 80, 80);
}

function setup() {
  createCanvas(720, 400);
  background(51);
  noStroke();
  noLoop();
}

function draw() {
  drawTarget(width*0.25, height*0.4, 200, 4);
  drawTarget(width*0.5, height*0.5, 300, 10);
  drawTarget(width*0.75, height*0.3, 120, 6);
}

function drawTarget(xloc, yloc, size, num) {
  var greyvalues = 255/num;
  var steps = size/num;
  for (var i = 0; i < num; i++) {
    fill(i*greyvalues);
    ellipse(xloc, yloc, size - i*steps, size - i*steps);
  }
}

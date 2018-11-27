let size = 50

function setup(){
  createCanvas(500, 500);

}

function draw() {
  fill(215, 200, 170);
  for (let x = 0; x < 10; x ++) {
    rect(size*x, 0, size, size);
    rect(size*x, 225, size, size);
    rect(size*x, height-size, size, size);
  }
}

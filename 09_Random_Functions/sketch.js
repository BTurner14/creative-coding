function setup() {
  createCanvas(500, 500);
  background(160);
  col1 = colour(random(100, 200), random(100, 200), random(100, 200));
  col2 = colour(random(100, 200), random(50, 100), random(50, 100));
  col3 = colour(random(50, 100), random(50, 100), random(100, 200));
  col4 = colour(random(50, 200), random(50, 200), random(50, 200));
  checkerFunction(20, 20, col1);
  checkerFunction(width-220, size, col2);
  checkerFunction(20, height-220, col3);
  checkerFunction(width-220, height-220, col4);
}

function checkerFunction(xPos, yPos, colourInput) {
  for (let y = 0, y < 10, y++) {
    for (let x = 0, x < 10, x++) {
      if (x%2===0 && y%2===1 || x%2===1 && y%2===0) {
        fill(0);
      } else fill(colourInput);
      rect(x * size + xPos, y * size + yPos, size, size);
    }
  }
}

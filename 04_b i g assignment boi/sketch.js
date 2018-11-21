var r, g, b;

var rad = 60
var xpos, ypos; // Starting position of shape

var xspeed = 2.8; // Speed of the shape
var yspeed = 2.2; // Speed of the shape

var xdirection = 1; // Left or Right
var ydirection = 1; // Top to Bottom

function setup() {
  createCanvas(594, 841);
  frameRate(60);
  rectMode(RADIUS)
  xpos = width / 2;
  ypos = height / 2;

}

function mousePressed(){
var d = dist (mouseX, mouseY, xpos, ypos)
  if (d < 100){
  r = random(255);
  g = random(255);
  b = random(255);
}
}

function draw(){
  background(0);

  xpos = xpos + xspeed * xdirection;
ypos = ypos + yspeed * ydirection;

if (xpos > width - rad || xpos < rad) {
   xdirection *= -1;
 }
 if (ypos > height - rad || ypos < rad) {
   ydirection *= -1;
 }


  fill(r, g, b, 127)
  rect(xpos, ypos, rad, rad);
}

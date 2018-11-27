var r, g, b; //Colour of the shape

var rad = 60 //Size of the shape
var xpos, ypos; // Starting position of shape

var xspeed = 2.8; // Speed of the shape
var yspeed = 2.2; // Speed of the shape

var xdirection = 1; // Left to Right
var ydirection = 1; // Top to Bottom

function setup() {
  createCanvas(594, 841);
  frameRate(60); //Set frame rate
  rectMode(RADIUS) //Shape is drawn from the set position
  xpos = width / 2;
  ypos = height / 2; //Set initial position

}

function mousePressed(){
var d = dist (mouseX, mouseY, xpos, ypos)
  if (d < 100){
  r = random(255);
  g = random(255);
  b = random(255); //Add mouse press function to rectangle; random colour when clicked
}
}

function draw(){
  background(0);

  xpos = xpos + xspeed * xdirection;
ypos = ypos + yspeed * ydirection; //Initiates movement across the canvas

if (xpos > width - rad || xpos < rad) {
   xdirection *= -1;
 }
 if (ypos > height - rad || ypos < rad) {
   ydirection *= -1; //Creates a "bounce" effect; cannot leave the canvas
 }


  fill(r, g, b, 127)
  rect(xpos, ypos, rad, rad); //Link shape with above code
}

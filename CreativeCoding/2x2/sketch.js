function setup() {
  createCanvas(720, 720);
  background(107, 129, 207);
  strokeWeight(8);
  fill (87, 94, 138);
}

function draw() {
  
  translate (60, 60); //creates a new origin 
quad (
  0, 0,
  300, 0,
  300, 300,
  0, 300);
  
  quad (
  300, 0,
  600, 0,
  600, 300,
  300, 300); //move 300 pixels to right: x direction
  
  quad (
  0, 300,
  300, 300,
  300, 600,
  0, 600);
  
  quad (
  300, 300,
  600, 300,
  600, 600,
  300, 600);
}
function setup() {
  createCanvas(720, 720);
  background(107, 129, 207);
  strokeWeight(8);
  fill (87, 94, 138);
}

function draw() {
  
  translate (60, 60); //creates a new origin 
  
  for (var y = 0; y < 600; y = y + 300){
  for (var x = 0; x < 600; x = x + 300){
    quad (
  x, y,
  300+x, y,
  300+x, 300+y,
  x, 300+y);
  
  }
  }

  
  
}
// program enables us to customize # of squares in grid
// 1 variable determines # of squares, 1 defines side length based on window width
function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(1);
  fill (87, 94, 138);
}

function draw() {

  var num = 20; //# of squares
  var sideLen = windowWidth/num; //side length of square
  
  for (var y = 0; y < windowHeight; y = y + sideLen){
  for (var x = 0; x < windowWidth; x = x + sideLen){
    quad (
  x, y,
  sideLen+x, y,
  sideLen+x, sideLen+y,
  x, sideLen+y);
  
  }
  }

 
  
}
 function windowResized (){
   resizeCanvas (windowWidth, windowHeight);
 }
let gif;

function preload (){
gif = loadImage ('MainAssets/TuGIF3.gif');

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(1);
  fill (87, 94, 138);
}

function draw() {

background ('white');
  var num = 10; //# of squares
  var sideLen = windowWidth/num; //side length of square
  
  for (var y = 0; y < windowHeight; y = y + sideLen){
  for (var x = 0; x < windowWidth; x = x + sideLen){
    image (gif, x, y, sideLen, sideLen);
  
  }
  }

 
  
}
 function windowResized (){
   resizeCanvas (windowWidth, windowHeight);
 }
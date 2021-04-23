var movingbox,fixedbox
function setup() {
  createCanvas(1200,800);
  fixedbox = createSprite(600, 400, 50, 80);
  fixedbox.shapeColor = "lightblue"
  movingbox = createSprite(400, 200, 80, 30);
  movingbox.shapeColor = "red"
}

function draw() {
  background(255,255,255);
  movingbox.x = mouseX
  movingbox.y = mouseY
  if(movingbox.x - fixedbox.x < fixedbox.width/2 + movingbox.width/2 &&
    fixedbox.x - movingbox.x < fixedbox.width/2 + movingbox.width/2 &&
    movingbox.y - fixedbox.y < fixedbox.width/2 + movingbox.width/2 &&
    fixedbox.y - movingbox.y < fixedbox.width/2 + movingbox.width/2){
    movingbox.shapeColor = "purple"
    fixedbox.shapeColor = "pink"
  }
  else{
    movingbox.shapeColor = "red"
    fixedbox.shapeColor = "lightblue" 
  }
  drawSprites();
}
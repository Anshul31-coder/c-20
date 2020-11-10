var fixedRect,movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "Blue";

  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "Blue";
}

function draw() {
  background(0);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  //console.log(movingRect.x - fixedRect.x);

  if(movingRect.x - fixedRect.x < (fixedRect.width+movingRect.width)/2 && fixedRect.x - movingRect.x < (fixedRect.width+movingRect.width)/2 && movingRect.y - fixedRect.y < (fixedRect.height+movingRect.height)/2 && fixedRect.y - movingRect.y < (fixedRect.height+movingRect.height)/2) 
  {
      movingRect.shapeColor ="red";
      fixedRect.shapeColor ="red";
  }
  else
  {
    movingRect.shapeColor ="blue";
      fixedRect.shapeColor ="blue";
  }
  
  drawSprites();
}
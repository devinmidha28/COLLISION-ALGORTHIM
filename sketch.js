var movingRectangle, fixedRectangle;

function setup() {
  createCanvas(1000,1000);
  fixedRectangle = createSprite(400, 200, 50, 50);
  fixedRectangle.shapeColor = "green";
  movingRectangle = createSprite(600,600,50,50);
  movingRectangle.shapeColor = "green";

}

function draw() {
  background(255,255,255);  

  movingRectangle.y=World.mouseY;
  movingRectangle.x=World.mouseX; 

   if(movingRectangle.x-fixedRectangle.x<movingRectangle.width/2+fixedRectangle.width/2&&
    fixedRectangle.x-movingRectangle.x<movingRectangle.width/2+fixedRectangle.width/2&&movingRectangle.y-fixedRectangle.y<movingRectangle.width/2+fixedRectangle.width/2&&
    fixedRectangle.y-movingRectangle.y<movingRectangle.width/2+fixedRectangle.width/2){
     movingRectangle.shapeColor = "red";
     fixedRectangle.shapeColor = "red";
   }

   else{
    movingRectangle.shapeColor = "green";
    fixedRectangle.shapeColor = "green";
   }
  drawSprites();
}
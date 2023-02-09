// actor properties
let xActor = 200;
let yActor = 366;
let collision = false;
let myPoints = 0;

function showActor(){
  image(actorImage, xActor, yActor, 30, 30);
}

function moveActor(){
  if (keyIsDown(UP_ARROW)) {
    yActor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if (yActor < 366) {
      yActor += 3; 
    }
  }  
  if (keyIsDown(LEFT_ARROW)){    
    if (xActor > 0) {
      xActor -= 3;
    }
  }  
  if (keyIsDown(RIGHT_ARROW)){    
    if (xActor < 470) {
      xActor += 3; 
    }
  }  
}

function verifyCollision(){
  for (let i = 0; i< cars.length; i++){
    collision = collideRectCircle(xCars[i], yCars[i], carWidth, carHeight, xActor, yActor, 15);
    if (collision) {
      goToInitialPosition();
      collisionSound.play();
      
      if (myPoints > 0){
        myPoints -= 1;
      }
    }
  }  
}

function goToInitialPosition(){
  yActor = 366;
  xActor = 200;
}

function incrementPoints(){
  textSize(30);
  textAlign(CENTER);
  fill(255,240,80)
  text(myPoints, 220, 29)
}

function scorePoint(){
  if (yActor < 15){
    myPoints += 1;
    goToInitialPosition();
    pointSound.play();
  }
}


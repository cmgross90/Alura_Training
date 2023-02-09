function setup() {
  createCanvas(500, 400);
  backgroundSound.loop();
}

function draw() {
  background(streetImage);
  showActor();
  showCars();
  moveCars();
  moveActor();
  verifyCollision();
  incrementPoints();
  scorePoint();
}



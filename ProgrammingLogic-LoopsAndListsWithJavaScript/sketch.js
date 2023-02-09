let streetImage;
let actorImage;
let greenCar;

// actor properties
let yActor = 366;

// car properties
let xCar = 600;


function preload(){
  streetImage = loadImage("images/road.png");
  actorImage = loadImage("images/actor.png");
  greenCar = loadImage("images/greenCar.png");
}

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(streetImage);
  showActor();
  showGreenCar();
  moveCar();
  moveActor();
}

function showActor(){
  image(actorImage, 100, yActor, 30, 30);
}

function showGreenCar(){
  image(greenCar, xCar, 40, 50, 40);
}

function moveCar(){
  xCar -=2;
}

function moveActor(){
  if (keyIsDown(UP_ARROW)) {
    yActor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    yActor += 3;
  }  
}
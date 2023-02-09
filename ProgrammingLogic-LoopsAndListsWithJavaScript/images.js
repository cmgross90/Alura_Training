let streetImage;
let actorImage;
let greenCar;
let yellowCar;
let blackCar;
let backgroundSound;
let collisionSound;
let pointSound;

function preload(){
  streetImage = loadImage("images/road.png");
  actorImage = loadImage("images/actor.png");
  greenCar = loadImage("images/greenCar.png");
  yellowCar = loadImage("images/yellowCar.png");
  blackCar = loadImage("images/blackCar.png");
  cars = [greenCar, yellowCar, blackCar, yellowCar, greenCar, blackCar];
  
  backgroundSound = loadSound("sounds/background.mp3");
  collisionSound = loadSound("sounds/collision.mp3");
  pointSound = loadSound("sounds/points.wav");
}
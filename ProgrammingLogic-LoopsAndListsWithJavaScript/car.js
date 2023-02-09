// car properties
let xCars = [600, 600, 600, 600, 600, 600];
let yCars = [40, 96, 150, 210, 270, 318];
let carsVelocity = [2, 3, 4, 3, 2, 4];
let carHeight = 40;
let carWidth = 50;

function showCars(){
  for (let i = 0; i < cars.length; i++){
    image(cars[i], xCars[i], yCars[i], carWidth, carHeight);  
  }
}

function moveCars(){
  for (let i = 0; i < cars.length; i++){
    xCars[i] -= carsVelocity[i];
  }
  
  returnToInitialPosition();
}

function returnToInitialPosition(){
  for (let i = 0; i < cars.length; i++){
    if (isFinalPosition(xCars[i])){
      xCars[i] = 600;
    }
  }
}

function isFinalPosition(xCar){
  return xCar < -50;
}
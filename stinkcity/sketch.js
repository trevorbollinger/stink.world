let person;
let tileSize = 40;
let offsetX = 0;
let offsetY = 0;

function setup() {
  createCanvas(1500, 800);
  person = new Person();
}

function draw() {
  //console.log(person.velX);
  background(220);
  person.update();

  // Draw the map and the person
  drawMap(offsetX, offsetY);
  person.show();
}
